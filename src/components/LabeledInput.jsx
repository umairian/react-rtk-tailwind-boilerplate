export default function LabeledInput({ labelText, type, placeholder, className, onChange, value}) {
    return (
        <div className={className}>
            <label className="text-gray-500 font-bold">{labelText}</label><br />
            <input className="p-2 border w-full rounded mt-2" type={type} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    );
}