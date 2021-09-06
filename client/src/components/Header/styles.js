import styled from 'styled-components'

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 1rem 1rem;
`

export const Logo = styled.div` 
    width: 15rem;
    border-radius: 15px;
    background-color: var(--color-violet);
    display:flex;
    justify-content: center;
    font-family: 'Ropa-Sans',sans-serif;
    color:var(--color-black);
    font-size: 2rem;
`
export const NavBar = styled.ul`
    display:flex;
    li{
        margin-right: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
        transition: transform 0.5s  ease;
        transition: color 0.5 ease;
        :hover{
            transform: scale(1.5);
        }
        :active{
            color: var(--color-pink)
        }
    }
`
const BaseModal = styled.div`
    ${(props) =>  console.log(props)}
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`
 
export const Animation = styled(BaseModal)`
   .btn {
    position: absolute;
    font-size: 2rem;
    cursor:pointer;
    margin: 0.5rem;
    transition: 1s ease;
    :hover{
      transform: rotate(360deg);
    }
  }
  transform: translateX(
    ${({state}) => {
		switch (state) {
		case 'entering':
			return '0%'
		case 'entered':
			return '0%'
		case 'exiting':
			return '+100%'
		case 'exited':
			return '+100%'
		}
	}
}
  );
   transition: 0.5s ease-in;

  `