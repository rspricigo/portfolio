"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function PortfolioForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Informe o nome do seu projeto.</FormDescription>
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
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Url_img"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL da Imagem</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Insira a url da imagem principal do seu projeto.
              </FormDescription>
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
                <Input placeholder="https://www.meuprojeto.com" {...field} />
              </FormControl>
              <FormDescription>Url da demo do projeto.</FormDescription>
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
              <FormDescription>Url do repositorio no github.</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
}
