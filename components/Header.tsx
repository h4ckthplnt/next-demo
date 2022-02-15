import Link from 'next/link';
import { Button, ButtonToolbar, Navbar, NavbarBrand } from 'reactstrap'

type HeaderProps = {
    onClick: () => void;
    isRecordset?: boolean;
}


const Header: React.FunctionComponent<HeaderProps> = ({
    onClick,
    isRecordset = false
}) => {
    // doing styles like this is little dirty, but imo there are so few styles here
    // that a stylesheet or pulling in styled-components is more clutter than
    // necessary
    const backgroundStle = isRecordset ? "#ffffff": "#3E50B5";
    const buttonStyle = isRecordset ? { color: "#ffffff", backgroundColor: "#3E50B5"} : { color: "#424242", backgroundColor: "#E0E0E0"};
    return(
        <Navbar
            style={{ backgroundColor: backgroundStle }}>
            <NavbarBrand>
                {isRecordset && 
                    <ButtonToolbar>
                        <Link href="/metrics" as={`/metrics`}>
                            <Button 
                                className="me-2"
                                style={buttonStyle}>
                                Back
                            </Button>
                        </Link>
                        <Button 
                            style={buttonStyle}
                            onClick={onClick}>
                            Add Value
                        </Button>
                    </ButtonToolbar>
                }
                {!isRecordset &&
                    <Button
                        onClick={onClick}
                        style={buttonStyle}>
                            Create Metric
                    </Button>
                }
                
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;