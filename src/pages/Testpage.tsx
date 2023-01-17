import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { atomsWithQuery, atomsWithMutation } from 'jotai-tanstack-query';
import axios from 'axios';

const idAtom = atom(1);
const [userAtom, userStatusAtom] = atomsWithQuery((get) => ({
  queryKey: ['users', get(idAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res;
  },
}));
const [, postAtom] = atomsWithMutation((get) => ({
  mutationKey: ['posts'],
  mutationFn: async ({ title, body }: { title: string; body: string }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: get(idAtom) }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const data = await res.json();
    return data;
  },
}));

const Testpage = () => {
  const [resultData] = useAtom(userStatusAtom);
  const [post, mutate] = useAtom(postAtom);
  const { isLoading, isError, data, error } = resultData;
  if (isLoading) {
    return <div>loading 중</div>;
  }

  if (isError) {
    return <div>Error 발생</div>;
  }

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      테스트 페이지입니다.
      <button>추가 테스트</button>
    </div>
  );
};

export default Testpage;
