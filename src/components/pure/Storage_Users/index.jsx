import styles from './storage_users.module.css';

function Storage_Users() {
    return (
        <div className={styles.storage_users}>
            <div className={styles.storage_users_imgs}>
                    <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <img src="https://images.pexels.com/photos/4048499/pexels-photo-4048499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <img src="https://images.pexels.com/photos/1466561/pexels-photo-1466561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <img src="https://images.pexels.com/photos/3762813/pexels-photo-3762813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <img src="https://images.pexels.com/photos/1843667/pexels-photo-1843667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <h4>200</h4>
            <span>Users Following</span>
        </div>
    );
}

export default Storage_Users;