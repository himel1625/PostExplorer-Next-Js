import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';
import Link from 'next/link';

export const NavbarComponent = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <Navbar className='py-2 backdrop-blur-sm z-[999] font-bold bg-white/40 sticky top-0'>
      <NavbarContainer className='container mx-auto  px-5'>
        <Link href={'/'}>
          <NavbarBrand>
            <img
              className='w-12 h-12'
              src={'https://i.ibb.co.com/wBpVm15/new-post.png'}
              alt='keep'
            />
          </NavbarBrand>
        </Link>
        <NavbarList>
          <Link href={'/'}>
            <NavbarItem>Home </NavbarItem>
          </Link>
          <Link href={'/profile'}>
            <NavbarItem>Profile </NavbarItem>
          </Link>
          {isUserAuthenticated ? (
            <LogoutLink postLogoutRedirectURL='/'>
              <NavbarItem active className='bg-rose-500 hover:bg-rose-500'>
                Log out
              </NavbarItem>
            </LogoutLink>
          ) : (
            <>
              <LoginLink postLoginRedirectURL='/'>
                <NavbarItem active className='bg-[#f2780c] hover:bg-[#f2780c]'>
                  Sign in
                </NavbarItem>
              </LoginLink>
              <RegisterLink postLoginRedirectURL='/profile'>
                <NavbarItem active className='bg-lime-500 hover:bg-lime-600'>
                  Sign up
                </NavbarItem>
              </RegisterLink>
            </>
          )}
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <Link href={'/'}>
            <NavbarItem>Home </NavbarItem>
          </Link>
          <Link href={'/profile'}>
            <NavbarItem>Profile </NavbarItem>
          </Link>
          {isUserAuthenticated ? (
            <LogoutLink postLogoutRedirectURL='/'>
              <NavbarItem active className='bg-rose-500 hover:bg-rose-500'>
                Log out
              </NavbarItem>
            </LogoutLink>
          ) : (
            <>
              <LoginLink postLoginRedirectURL='/'>
                <NavbarItem active>Sign in</NavbarItem>
              </LoginLink>
              <RegisterLink postLoginRedirectURL='/profile'>
                <NavbarItem active className='bg-lime-500 hover:bg-lime-600'>
                  Sign up
                </NavbarItem>
              </RegisterLink>
            </>
          )}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
