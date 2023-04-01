<script lang="ts">
    import '../app.postcss';
    import type { PageData } from './$types';
    import {
        Avatar,
        DarkMode,
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup,
        Navbar,
        NavBrand,
        NavHamburger, NavLi, NavUl
    } from "flowbite-svelte";
    import AuthModal from '$lib/components/authentication/auth.modal.svelte'

    export let data: PageData;

    let showLogin = false;
    let modalTyp = 'login'
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
    </NavBrand>
    <NavUl {hidden}>
        {#if !data.session}
            <NavLi on:click={() => { showLogin = true; modalTyp = 'login' }}>Signin</NavLi>
            <NavLi on:click={() => { showLogin = true; modalTyp = 'register' }}>Register</NavLi>
        {/if}
    </NavUl>
    {#if data.session}
        <Avatar id="avatar-menu">MM</Avatar>
        <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
    {/if}
    <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/services">Services</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
    <DarkMode/>
</Navbar>
<slot/>
<Footer>
    <FooterCopyright href="/" by="Flowbite™" year={2022}/>
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
</Footer>

<AuthModal bind:authModal={showLogin} bind:modalTyp={modalTyp}></AuthModal>
