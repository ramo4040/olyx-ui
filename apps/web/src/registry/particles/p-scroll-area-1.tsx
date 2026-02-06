import { ScrollArea } from "@olyx/react/scroll-area";

export default function Particle() {
  return (
    <ScrollArea
      style={{ height: 200, border: "1px solid var(--color-surface-variant)" }}
    >
      <div style={{ padding: 12 }}>
        <div>
          Just as suddenly as it had begun, the sensation stopped, leaving Alice
          feeling slightly disoriented. She looked around and realized that the
          room hadn't changed at all — it was she who had grown smaller,
          shrinking down to a fraction of her previous size.
        </div>
        <br />
        <div>
          Alice felt herself growing larger and larger, filling up the entire
          room until she feared she might burst. The sensation was both
          thrilling and terrifying, as if she were expanding beyond the confines
          of her own body. She wondered if this was what it felt like to be a
          balloon, swelling with air until it could hold no more.
        </div>
        <br />
        <div>
          The Cheshire Cat appeared on a branch overhead, grinning broadly.
          &quot;We&apos;re all mad here,&quot; it said. &quot;I&apos;m mad.
          You&apos;re mad.&quot; Alice asked how it knew she was mad. &quot;You
          must be,&quot; said the Cat, &quot;or you wouldn&apos;t have come
          here.&quot;
        </div>
        <br />
        <div>
          A white rabbit dashed past, muttering about being late. Alice followed
          it down the hole without a second thought, tumbling through a tunnel
          of clocks and teacups into a world where nothing was quite what it
          seemed.
        </div>
      </div>
    </ScrollArea>
  );
}
