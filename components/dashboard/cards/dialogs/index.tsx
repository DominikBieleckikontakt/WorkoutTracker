import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import React from "react";
import StepsDialog from "./steps-dialog";

const Dialogs = ({ cardId }: { cardId: string }) => {
  const dialogsArray = [
    { id: "1", component: <StepsDialog /> },
    { id: "2", component: <StepsDialog /> },
    { id: "3", component: <StepsDialog /> },
    { id: "4", component: <StepsDialog /> },
    { id: "5", component: <StepsDialog /> },
    { id: "6", component: <StepsDialog /> },
    { id: "7", component: <StepsDialog /> },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit className="size-4 opacity-60 cursor-pointer hover:opacity-100 duration-300" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {dialogsArray.find((dialog) => dialog.id === cardId)?.component}
      </DialogContent>
    </Dialog>
  );
};

export default Dialogs;
