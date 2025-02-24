
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  topics: z.string().min(2, "Por favor describe los temas"),
  availability: z.string().min(2, "Por favor indica tu disponibilidad"),
  compensation: z.string().min(2, "Por favor indica tus honorarios esperados"),
  canTravel: z.string().min(2, "Por favor indica tu disponibilidad para viajar"),
});

export const TeacherForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Here you would integrate with HubSpot's API
      console.log("Form submitted:", values);
      toast.success("¡Gracias por tu propuesta! Nos pondremos en contacto pronto.");
      form.reset();
    } catch (error) {
      toast.error("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+52" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topics"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Temas del Curso</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe los temas que te gustaría impartir..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Disponibilidad</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="¿Qué días y horarios te funcionan mejor?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="compensation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Honorarios Esperados</FormLabel>
              <FormControl>
                <Input placeholder="MXN por hora/sesión" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="canTravel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Disponibilidad para Viajar</FormLabel>
              <FormControl>
                <Input placeholder="¿Podrías viajar para sesiones presenciales?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Enviar Propuesta
        </Button>
      </form>
    </Form>
  );
};
