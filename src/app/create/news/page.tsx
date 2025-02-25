"use client";
import { useState } from "react";
import { Button, Flex } from "@radix-ui/themes";
import Layout from "@/components/Layout";
import Cookies from "js-cookie";
import MenuBar from "@/components/editor/MenuBar";
import Content from "@/components/editor/Content";
import AddThumbnail from "@/components/editor/AddThumbnail";
import Validation from "@/components/editor/Validation";
import { useRouter } from "next/navigation";
import usePreventBackspace from "@/hooks/usePreventBackspace";
import useEditor from "@/hooks/useEditor";
import axios from "axios";
import "./NewsEditor.css";

export default function NewsEditor() {
  const [loading, setLoading] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [excerpt, setExcerpt] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const editor = useEditor();

  const router = useRouter()

  usePreventBackspace();

  async function handleUpload() {
    setLoading(true);
    const formData = new FormData();

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("content", editor?.getHTML() || "");

    try {
      const token = Cookies.get("token");
      const response = await axios.post("/api/create/news", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        editor?.setOptions({ content: "" });
        setTitle("");
        setThumbnail(null);
        setExcerpt("");
        setCategory("");
        setTags("");
        setLoading(false);
        router.push('/news')
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Layout width={{ initial: "100%", md: "900px" }}>
      <Flex px={{ initial: "0", sm: "9" }} direction={"column"} gap={"5"}>
        <AddThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />

        <input
          className="news-editor-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Antraštė..."
        />

        <input
          className="news-editor-category"
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Aprašymas..."
        />

        <input
          className="news-editor-category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Kategorija..."
        />

        <input
          className="news-editor-category"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Subkategorijos... (išskirta kableliu)"
        />
      </Flex>

      <Flex direction={"column"}>
        <MenuBar editor={editor} />
        <Content editor={editor} />
      </Flex>

      <Validation
        thumbnail={thumbnail}
        category={category}
        tags={tags}
        editor={editor}
        title={title}
      />

      <Flex justify={"between"} style={{ marginBottom: "30vh" }}>
        <Flex>{editor?.getText().length} / 20000</Flex>
        <Button
          onClick={() => handleUpload()}
          color="green"
          size={"3"}
          variant="outline"
          disabled={!title || !editor?.getText().length || thumbnail === null}
          loading={loading}
        >
          TALPINTI
        </Button>
      </Flex>
    </Layout>
  )
}
