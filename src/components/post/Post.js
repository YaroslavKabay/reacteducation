export default function Post({item,color, chosePost}){ // the same destructorization as let {item} = props; можна через кому деструкторизовувати і інші значення пропсів

    return (
      <div
          // style={{background: color, marginBottom: '3px'}}
      >
          {item.id} {item.title}
          <button onClick={() => {
              chosePost(item)  // ми можемо через пропси передавати функцію так як функція це обєкт а обєкт є реферренціальним типом даних
              // statelifting передача стану наверх через пропси до батька
          }}>
              details
          </button>

      </div>
  );
}