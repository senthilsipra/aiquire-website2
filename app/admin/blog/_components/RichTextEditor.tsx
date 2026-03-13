"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import { useEffect, useCallback, useRef, useState } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Heading1,
  Heading2,
  Heading3,
  Type,
  Minus,
  Loader2,
} from "lucide-react";
import { serverUploadImage } from "../actions";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  error?: boolean;
}

function ToolbarButton({
  onClick,
  active = false,
  disabled = false,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`rte-btn ${active ? "rte-btn-active" : ""}`}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <div className="rte-divider" />;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your blog post content here…",
  error = false,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        blockquote: {},
        bulletList: {},
        orderedList: {},
        strike: {},
        horizontalRule: {},
      }),
      Underline,
      Highlight.configure({ multicolor: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "rte-link" },
      }),
      Image.configure({
        HTMLAttributes: { class: "rte-image" },
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "rte-editor-content",
        "aria-label": "Blog post content",
      },
    },
  });

  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync external value changes (e.g. resetting form)
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  const addLink = useCallback(() => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href ?? "";
    const url = window.prompt("Enter link URL:", previous);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    fileInputRef.current?.click();
  }, [editor]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    // Basic validation
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      alert("Only JPEG, PNG, WebP, or GIF images are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5 MB.");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const url = await serverUploadImage(formData, "content");
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  if (!editor) return null;

  return (
    <div className={`rte-wrap ${error ? "rte-wrap-error" : ""}`}>
      {/* ── Toolbar ─────────────────────────────────────────────────── */}
      <div className="rte-toolbar" role="toolbar" aria-label="Text formatting">
        {/* History */}
        <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          <Undo size={15} />
        </ToolbarButton>
        <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          <Redo size={15} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Block type */}
        <ToolbarButton title="Paragraph" active={editor.isActive("paragraph")} onClick={() => editor.chain().focus().setParagraph().run()}>
          <Type size={15} />
        </ToolbarButton>
        <ToolbarButton title="Heading 1" active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <Heading1 size={15} />
        </ToolbarButton>
        <ToolbarButton title="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <Heading2 size={15} />
        </ToolbarButton>
        <ToolbarButton title="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <Heading3 size={15} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Inline formatting */}
        <ToolbarButton title="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={15} />
        </ToolbarButton>
        <ToolbarButton title="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={15} />
        </ToolbarButton>
        <ToolbarButton title="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon size={15} />
        </ToolbarButton>
        <ToolbarButton title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough size={15} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Lists */}
        <ToolbarButton title="Bullet List" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List size={15} />
        </ToolbarButton>
        <ToolbarButton title="Numbered List" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={15} />
        </ToolbarButton>
        <ToolbarButton title="Blockquote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote size={15} />
        </ToolbarButton>
        <ToolbarButton title="Horizontal Rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <Minus size={15} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Alignment */}
        <ToolbarButton title="Align Left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <AlignLeft size={15} />
        </ToolbarButton>
        <ToolbarButton title="Align Center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          <AlignCenter size={15} />
        </ToolbarButton>
        <ToolbarButton title="Align Right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          <AlignRight size={15} />
        </ToolbarButton>

        <ToolbarDivider />

        {/* Media */}
        <ToolbarButton title="Insert Link" active={editor.isActive("link")} onClick={addLink}>
          <LinkIcon size={15} />
        </ToolbarButton>
        <ToolbarButton title="Insert Image" onClick={addImage} disabled={uploading}>
          {uploading ? <Loader2 size={15} className="rte-spin" /> : <ImageIcon size={15} />}
        </ToolbarButton>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: "none" }}
      />

      {/* ── Editor area ─────────────────────────────────────────────── */}
      <EditorContent editor={editor} />

      {/* ── Styles ──────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rte-wrap {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          transition: border-color 0.15s;
        }
        .rte-wrap:focus-within { border-color: #0F2B46; }
        .rte-wrap.rte-wrap-error { border-color: #f87171; background: #fef2f2; }

        .rte-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2px;
          padding: 8px 10px;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }

        .rte-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border: none;
          border-radius: 5px;
          background: transparent;
          color: #374151;
          cursor: pointer;
          transition: background 0.12s, color 0.12s;
          flex-shrink: 0;
        }
        .rte-btn:hover:not(:disabled) { background: #e5e7eb; }
        .rte-btn.rte-btn-active { background: #0F2B46; color: white; }
        .rte-btn:disabled { opacity: 0.35; cursor: not-allowed; }

        .rte-divider {
          width: 1px;
          height: 20px;
          background: #e5e7eb;
          margin: 0 4px;
          flex-shrink: 0;
        }

        /* Editor content area */
        .rte-editor-content {
          min-height: 420px;
          padding: 16px 18px;
          font-size: 15px;
          line-height: 1.7;
          color: #111827;
          outline: none;
        }

        /* Tiptap placeholder */
        .rte-editor-content p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }

        /* Prose styles inside the editor */
        .rte-editor-content h1 { font-size: 1.875rem; font-weight: 700; margin: 1.5em 0 0.5em; line-height: 1.25; color: #0F2B46; }
        .rte-editor-content h2 { font-size: 1.5rem;   font-weight: 700; margin: 1.4em 0 0.4em; line-height: 1.3;  color: #0F2B46; }
        .rte-editor-content h3 { font-size: 1.25rem;  font-weight: 600; margin: 1.2em 0 0.4em; line-height: 1.35; color: #0F2B46; }
        .rte-editor-content p  { margin: 0 0 1em; }
        .rte-editor-content strong { font-weight: 700; }
        .rte-editor-content em { font-style: italic; }
        .rte-editor-content u  { text-decoration: underline; }
        .rte-editor-content s  { text-decoration: line-through; color: #6b7280; }
        .rte-editor-content ul { list-style: disc;    padding-left: 1.5em; margin: 0.5em 0 1em; }
        .rte-editor-content ol { list-style: decimal; padding-left: 1.5em; margin: 0.5em 0 1em; }
        .rte-editor-content li { margin: 0.25em 0; }
        .rte-editor-content blockquote {
          border-left: 4px solid #ce2124;
          margin: 1em 0;
          padding: 8px 16px;
          color: #4b5563;
          background: #fef2f2;
          border-radius: 0 6px 6px 0;
          font-style: italic;
        }
        .rte-editor-content hr { border: none; border-top: 2px solid #e5e7eb; margin: 1.5em 0; }
        .rte-link { color: #2980B9; text-decoration: underline; }
        .rte-link:hover { color: #1A5E8A; }
        .rte-image { max-width: 100%; height: auto; border-radius: 8px; margin: 1em 0; display: block; }
        .rte-editor-content mark { background: #fef08a; border-radius: 2px; padding: 0 2px; }
        .rte-editor-content .ProseMirror-selectednode { outline: 2px solid #2980B9; border-radius: 4px; }

        .rte-spin { animation: rte-spin 1s linear infinite; }
        @keyframes rte-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
