import { getData } from "../lib/actions";

export async function TestLoading() {
  const data = await getData();
  return (
    <div>
      {data as string}
    </div>
  );
}