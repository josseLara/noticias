import styles from './account_detail.module.css';

function Account_Detail() {
    return (
        <div className={styles.account_detail}>
            <h1>Personal Detail</h1>
            <form action="" className={styles.account_detail__form}>
                {/* First Name */}
                <div className={styles.form__input}>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                {/* Last Name */}
                <div className={styles.form__input}>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                {/* Email Address */}
                <div className={styles.form__input}>
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder="Name" />
                </div>
                {/* Phone Number */}
                <div className={styles.form__input}>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder="Name" />
                </div>
            </form>
        </div>
    );
}

export default Account_Detail;