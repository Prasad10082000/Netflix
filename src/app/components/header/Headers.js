import React from 'react';
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

const Headers = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href='/'>
                    <Image src='/pb-logo.jpg' alt='logo' width={80} height={80}/>
                </Link>
            </div>
            <Nav/>
        </header>
    );
};

export default Headers;