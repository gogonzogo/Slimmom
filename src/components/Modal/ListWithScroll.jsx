import s from './modal.module.css';
const ListWithScroll = props => {
  return (
    <ol style={props.style}>
      {props.array.map(listItem => (
        <li className={s.notEatItem} key={listItem._id}>
          {listItem.title}
        </li>
      ))}
    </ol>
  );
};

export default ListWithScroll;
