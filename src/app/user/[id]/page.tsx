"use client";

import { useFindUserById } from "@/hooks/useFindUserById";

const AwesomeDetailPage = ({ params: { id } }: { params: { id: string } }) => {

  const {
    data
  } = useFindUserById(id);

  return (
    <div>
      <h1>AwesomeDetailPage</h1>
      <div>
        {
          data == null ? (
            <div>loading...</div>
          ) : (
            <div>
              <div>{data?.name}</div>
              <div>{data?.email}</div>
              <div>{data?.phone}</div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default AwesomeDetailPage;