import type { ErrorResponse } from "@/types/errorResponse";

export default (error: ErrorResponse) => {
  useToast().add({
    title: error.statusMessage,
    description: error.message,
    icon: "i-heroicons-x-circle-solid",
    color: "red",
    id: "error",
  });
};
