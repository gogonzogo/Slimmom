import css from './Button.module.css';

export default function Button({ buttonClick }) {
    return (
        <button className={css.Button} type="button" onClick={buttonClick}>Add</button>
    );
}