interface NoteProps {
  text: string;
}

export function Note({ text }: NoteProps) {
  return (
    <article className='note'>
      {text}
    </article>
  )
}
