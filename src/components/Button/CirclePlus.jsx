import css from './CirclePlus.module.css';

export default function CirclePlus({ buttonClick }) {
    return (
        <button className={css.CirclePlus} type="button" onClick={buttonClick}> + </button>
    );
}