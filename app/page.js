import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-60 ">
      <h3>Splitr - Expense Mangement App</h3>
      <Button variant={"destructive"} className="cursor-pointer mt-5">Submit</Button>
    </div>
  );
}
