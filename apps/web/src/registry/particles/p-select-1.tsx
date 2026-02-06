import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@olyx/react/select";

export default function Particle() {
  return (
    <Select defaultValue="next">
      <SelectTrigger>
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="next">Next.js</SelectItem>
        <SelectItem value="vite">Vite</SelectItem>
        <SelectItem value="astro">Astro</SelectItem>
        <SelectItem value="remix">Remix</SelectItem>
      </SelectContent>
    </Select>
  );
}
