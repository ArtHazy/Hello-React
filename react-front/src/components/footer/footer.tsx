import classNames from 'classnames';
import styles from './footer.module.scss';
import { views } from '../../components-main/app/App';

export interface ViewNavigationProps {
    className?: string;
    view_name?: string
    set_view_name: React.Dispatch<React.SetStateAction<string>>;
}
export interface FooterProps {
    children?: any
    bottom?: string | number
}

export const Footer = ({ children, bottom }: FooterProps) => {
    return (
        <div className={classNames(styles['Footer'])} style={{ bottom: bottom }}>
            {children}
        </div>
    );
};
export const ViewNavigation = ({ view_name, set_view_name }: ViewNavigationProps) => {
    return (
        <div className={styles['buttons-container']}>
            <HomeIcon onClick={() => {
                set_view_name(views.library.name)
            }} view_name={view_name} />
            <HubIcon onClick={() => {
                set_view_name(views.join.name)
            }} view_name={view_name} />
            <UserIcon onClick={() => {
                set_view_name(views.profile.name)
            }} view_name={view_name} />
        </div>
    )
}

export const HubIcon = (params: any) => {
    let style_selected_name: string;
    params.view_name == views.join.name ? style_selected_name = 'selected' : style_selected_name = ''
    return (
        <button className={styles['button'] + " " + styles[style_selected_name]}>
            <svg
                className={"icon "}
                onClick={() => {
                    params.onClick();
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
            >
                <path d="M240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35ZM120-540q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm120 420q17 0 28.5-11.5T280-160q0-17-11.5-28.5T240-200q-17 0-28.5 11.5T200-160q0 17 11.5 28.5T240-120Zm240-680q17 0 28.5-11.5T520-840q0-17-11.5-28.5T480-880q-17 0-28.5 11.5T440-840q0 17 11.5 28.5T480-800Zm0 440q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm240 240q17 0 28.5-11.5T760-160q0-17-11.5-28.5T720-200q-17 0-28.5 11.5T680-160q0 17 11.5 28.5T720-120Zm120-420q17 0 28.5-11.5T880-580q0-17-11.5-28.5T840-620q-17 0-28.5 11.5T800-580q0 17 11.5 28.5T840-540ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z" />
            </svg>
        </button>
    );
};
export const UserIcon = (params: any) => {
    let style_selected_name: string;
    params.view_name == views.profile.name ? style_selected_name = 'selected' : style_selected_name = ''
    return (
        <button className={styles['button'] + " " + styles[style_selected_name]}>
            <svg
                className={"icon "}
                onClick={params.onClick}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
            >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
        </button>
    );
};
export const HomeIcon = (params: any) => {
    let style_selected_name: string;
    params.view_name == views.library.name ? style_selected_name = 'selected' : style_selected_name = ''
    return (
        <button className={styles['button'] + " " + styles[style_selected_name]}>
            <svg
                className={"icon "}
                onClick={params.onClick}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
            >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
        </button>
    );
};

export const AddIcon = (params: any) => {
    let style_selected_name: string;
    params.view_name == views.library.name ? style_selected_name = 'selected' : style_selected_name = ''
    return (
        <svg
            className={"icon "}
            onClick={params.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
        >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
    );
};
