"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BlogActionsProps = {
  blogId: number;
};

const BlogActions = ({ blogId }: BlogActionsProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Bu blog yazısını silmek istediğinize emin misiniz?")) {
      return;
    }

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/admin/blog/${blogId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Silme işlemi başarısız");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Silme işlemi sırasında bir hata oluştu.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <Link
        href={`/admin/blog/${blogId}`}
        className="text-sm font-semibold text-[#384B70] transition hover:text-[#2E3D63]"
      >
        Düzenle
      </Link>
      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className="text-sm font-semibold text-rose-600 transition hover:text-rose-700 disabled:opacity-60"
      >
        Sil
      </button>
    </div>
  );
};

export default BlogActions;
