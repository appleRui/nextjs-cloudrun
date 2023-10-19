"use client";

import { useFindUsers } from "@/hooks/useFindUsers";
import { useRouter } from "next/navigation";

const AwesomeTopPage = () => {
  const {
    data
  } = useFindUsers();

  const router = useRouter();
  const onClickRow = (id: number) => {
    router.push(`/user/${id}`)
  }

  return (
    <div>
      <div>Awesome Detail Page</div>
      {
        data == null ? (
          <div>loading...</div>
        ) : 
        <div>
          {data?.map((user: any) => (
            <div key={user.id} onClick={
              () => onClickRow(user.id)
            }
            className="cursor-pointer"
            >
              <div>{user.name}</div>
            </div>
            ))}
        </div>
        }
    </div>
  );
}

export default AwesomeTopPage;