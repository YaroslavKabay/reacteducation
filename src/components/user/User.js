export default function User({item,lift}){
const onclick = () => {
    lift(item.id)
}

  return (
      <div>
          {item.id} - {item.name}
          <button onClick={onclick}>Post </button>
      </div>
  );
}