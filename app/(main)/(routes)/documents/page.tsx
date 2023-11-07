"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const { user } = useUser();
  const Create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = Create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note....",
      success: "New note created",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.png"}
        height={"300"}
        width={"300"}
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src={"/empty-dark.png"}
        height={"300"}
        width={"300"}
        alt="empty"
        className="hidden dark:block"
      />
      <h2>Welcome to {user?.firstName}&apos;s Jotion</h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
