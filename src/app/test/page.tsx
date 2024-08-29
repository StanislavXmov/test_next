import { Suspense } from "react";
import { TestLoading } from "./components/testLoading";

export const dynamic = "force-dynamic";

export default function TestPage() {
  
  return (
    <div>
      <Suspense fallback={<h2>TestPage Loading...</h2>}>
        <TestLoading />
      </Suspense>
    </div>
  );
}