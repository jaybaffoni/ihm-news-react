import Button from 'react-bootstrap/Button';

export const AppButton = ({title, ...rest}) => {

    return (
        <Button {...rest}>{title}</Button>
    )

}