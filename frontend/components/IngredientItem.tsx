interface Props {
  name: string;
  quantity: string;
}

export default function IngredientItem({ name, quantity }: Props) {
  return (
    <div className="p-2 border rounded flex justify-between items-center mb-2">
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
}
