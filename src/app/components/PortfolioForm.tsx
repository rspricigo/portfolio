"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000;

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "O titulo deve possuir ao menos 2 caracteres" })
    .max(50),
  description: z.string(),
  //imgUrl: z.string().url(),
  image: z
    .any()
    .refine((files) => files?.length == 1, {
      message: "A imagem é obrigatória!",
    })
    .refine((files) => files?.[0].size <= MAX_FILE_SIZE, {
      message: "A imagem deve ter no maximo 5MB!",
    }),
  tags: z.string(),
  URL: z
    .string()
    .optional()
    .refine((url) => !url || z.string().url().safeParse(url).success, {
      message: "Informe uma URL válida!",
    }),
  gitURL: z
    .string()
    .optional()
    .refine((url) => !url || z.string().url().safeParse(url).success, {
      message: "Informe uma URL válida!",
    }),
});

export default function PortfolioForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: "",
      URL: "",
      gitURL: "",
    },
  });

  const handleFormSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };

    reader.readAsDataURL(file);
    console.log("handleImageUpload");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Card className="w-full md:w-1/2 px-8 py-4">
        <Form {...form}>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Informe o nome do seu projeto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descricao</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    Insira uma descrição detalhada do seu projeto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>URL da Imagem</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </FormControl>
                  <FormDescription>
                    Insira a url da imagem principal do seu projeto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="React, Next.js, Tailwind" {...field} />
                  </FormControl>
                  <FormDescription>Tags separadas por virgula.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="URL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da demo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.meuprojeto.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Url da demo do projeto.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gitURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.github.com/seu-git/seu-repo"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Url do repositorio no github.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Salvar</Button>
          </form>
        </Form>
      </Card>
      <Card className="w-full md:w-1/2 px-8 py-4">
        <CardHeader>
          <CardTitle>Preview da imagem.</CardTitle>
        </CardHeader>
        <CardContent>
          {previewImage ? (
            <div className="relative w-full h-64">
              <Image
                alt="Preview da imagem do projeto"
                fill
                src={previewImage}
                className="object-cover rounded-md"
              />
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center rounded-md">
              <p>Nenhuma imagem selecionada</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
