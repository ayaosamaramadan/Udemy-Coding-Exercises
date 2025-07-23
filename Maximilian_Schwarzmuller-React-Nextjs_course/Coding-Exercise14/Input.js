
export default function Input({
  type = "text",
  richText = false,
  ...props
}) {
  if (richText) {
    return <textarea {...props} />;
  }
  return <input type={type} {...props} />;
}