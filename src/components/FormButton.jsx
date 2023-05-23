export default function FormButton({ className, text, type, disabled }) {
    return (
        <button type={type} disabled={disabled} className={`p-2 w-full bg-yellow-200 ${className}`}>{text}</button>
    );
}