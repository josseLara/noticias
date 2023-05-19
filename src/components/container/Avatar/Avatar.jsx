import styles from './avatar.module.css';

function Avatar() {
    return (
        <form className={styles.form__avatar}>
            <img src="https://images.pexels.com/photos/447186/pexels-photo-447186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" />
            <div className={styles.form__avatar__description}>
                <h2>Avatar</h2>
                <span>600 x 600 or large is recommended</span>
            </div>
            <button>Upload new</button>
        </form>
    );
}

export default Avatar;