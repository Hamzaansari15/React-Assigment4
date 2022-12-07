import './header.css';
import { useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Header = () => {

const [style, setStyle] = useState('');

const showLogin = useRef()

const showDiv = () => {
    setStyle(() => {
        showLogin.current.style.transform = 'scale(1)'
        showLogin.current.style.display= 'flex';
        
    });
}

const hideDiv = () => {
    setStyle(() => {
        showLogin.current.style.display = 'none';
    });
}
    return (
        <div className='main_header'>
            <div className='header_First_section'>
                <span id='header_link'>Turo has launched in New York! Tap to explore cars.</span>
            </div>
            <div className='header_second_section'>
                <div id='logo'><a href='/'><svg width="88px" height="32px" viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="eaq1ank0 seo-pages-rzeulm-NavbarLogoIcon" role="img" version="1.1"><path d="m77.416 2.853-.529-.666a5.833 5.833 0 0 0-.556-.614C75.261.56 73.824 0 72.305 0H0v32h72.319a5.86 5.86 0 0 0 4.026-1.573c.203-.187.38-.387.556-.6.013-.014.013-.027.027-.04l10.817-13.774-10.33-13.16Z" fill="#121214"></path><path d="M65.513 22.927c-4.162 0-7.429-3.213-7.429-7.333 0-3.867 3.349-7.014 7.456-7.014 1.993 0 3.85.747 5.246 2.08a7.056 7.056 0 0 1 2.183 5.134c0 3.933-3.349 7.133-7.456 7.133Zm0-11.867c-1.37 0-2.63.48-3.538 1.334-.922.866-1.423 2.093-1.423 3.426 0 1.267.528 2.44 1.504 3.307.936.84 2.21 1.32 3.498 1.32 1.328 0 2.562-.48 3.497-1.373a4.652 4.652 0 0 0 1.464-3.387c0-1.293-.529-2.48-1.478-3.333-.949-.84-2.182-1.294-3.524-1.294ZM31.76 22.874c-3.322 0-4.772-1.587-5.246-2.28-.732-1.067-.8-2.094-.8-3.227v-8.4h2.48v8.4c0 .88.055 1.547.665 2.16.61.6 1.653.88 3.199.88 1.26 0 2.087-.2 2.643-.627.583-.466.868-1.253.868-2.413v-8.4h2.453v8.4c0 1.307-.067 2.32-1.003 3.507-1.328 1.733-3.863 2-5.26 2Zm20.482-.267-2.792-4.933h-4.528v4.933h-2.494V8.967h8.16c2.63 0 4.474 1.8 4.474 4.373 0 2.014-1.125 3.6-2.942 4.16l2.942 5.107h-2.82Zm-1.64-7.387c.596 0 1.992-.186 1.992-1.973 0-1.133-.759-1.84-1.992-1.84h-5.666v3.813h5.666Zm-35.963 7.387V11.42H9.895V8.967h11.928v2.453H17.08v11.187h-2.44Z" fill="#fff"></path><path d="M65.541 8.607c1.98 0 3.836.734 5.232 2.08a7.067 7.067 0 0 1 2.17 5.12c0 3.907-3.335 7.094-7.43 7.094-4.147 0-7.414-3.214-7.414-7.307.014-3.853 3.348-6.987 7.442-6.987Zm0 11.867a5.1 5.1 0 0 0 3.51-1.373 4.629 4.629 0 0 0 1.465-3.4 4.512 4.512 0 0 0-1.478-3.36c-.935-.84-2.182-1.307-3.524-1.307-1.383 0-2.643.48-3.565 1.346-.922.88-1.437 2.107-1.437 3.454 0 1.267.529 2.453 1.505 3.333a5.415 5.415 0 0 0 3.524 1.307ZM50.603 8.994c2.697 0 4.446 1.867 4.446 4.36 0 1.933-1.07 3.587-2.942 4.146l2.928 5.094H52.27l-2.792-4.934h-4.569v4.934h-2.453v-13.6h8.147Zm-5.694 6.253h5.694c1.667 0 2.02-1.2 2.02-2 0-1.066-.678-1.867-2.02-1.867h-5.694v3.867Zm-6.9-6.253v8.373c0 1.293-.067 2.307-1.002 3.493-1.343 1.734-3.864 1.987-5.246 1.987-3.308 0-4.758-1.587-5.22-2.267-.731-1.066-.786-2.08-.786-3.213V8.994h2.427v8.373c0 .88.054 1.56.678 2.174.61.6 1.667.893 3.212.893 1.261 0 2.101-.2 2.657-.64.597-.467.881-1.267.881-2.44V8.98h2.4v.013Zm-16.212 0v2.413h-4.744v11.187h-2.4V11.407H9.91V8.994h11.888Zm43.744-.427c-4.12 0-7.47 3.16-7.47 7.04 0 4.12 3.281 7.347 7.456 7.347 4.121 0 7.47-3.2 7.47-7.147 0-1.96-.773-3.8-2.183-5.16-1.41-1.346-3.28-2.08-5.273-2.08Zm0 11.867c-1.288 0-2.548-.48-3.47-1.307-.963-.866-1.491-2.04-1.491-3.293 0-1.333.501-2.547 1.423-3.413.908-.854 2.155-1.334 3.524-1.334 1.329 0 2.562.467 3.484 1.307a4.413 4.413 0 0 1 1.464 3.32 4.58 4.58 0 0 1-1.45 3.36 5.109 5.109 0 0 1-3.484 1.36ZM50.603 8.954h-8.187v13.68h2.534v-4.92h4.487l2.779 4.907.013.026h2.888l-.04-.066-2.902-5.04c1.803-.56 2.928-2.16 2.928-4.174-.013-2.613-1.857-4.413-4.5-4.413Zm-5.653 2.48h5.64c1.233 0 1.965.68 1.965 1.813 0 1.76-1.383 1.96-1.966 1.96H44.95v-3.773Zm-6.886-2.48H35.57V17.38c0 1.16-.285 1.933-.868 2.4-.542.426-1.369.626-2.616.626-1.532 0-2.576-.293-3.186-.88-.61-.6-.664-1.267-.664-2.146V8.954h-2.521V17.38c0 1.133.054 2.16.8 3.24.474.693 1.938 2.293 5.26 2.293 1.395 0 3.93-.267 5.286-2.014.935-1.186 1.003-2.213 1.003-3.52V8.955Zm-16.213 0H9.882v2.506h4.744v11.174h2.48V11.46h4.745V8.954Z" fill="#fff"></path></svg></a></div>
                <div id='other_items'>
                    <span id='host_box'><p>Become a host</p></span>
                    <span onClick={showDiv} id='icon'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1"><path d="M19.15 6.85H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 5.76H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 6.01H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#121214"></path></svg><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-htr69o" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.368 18.847a9.575 9.575 0 0 0 6.592 2.624 9.573 9.573 0 0 0 6.488-2.527c-2.387-3.465-6.419-3.5-6.485-3.5a4.957 4.957 0 0 1-4.954-4.951 4.957 4.957 0 0 1 4.95-4.951 4.956 4.956 0 0 1 4.193 7.587.625.625 0 0 1-1.058-.666 3.705 3.705 0 0 0-3.134-5.671 3.705 3.705 0 0 0-3.701 3.701 3.705 3.705 0 0 0 3.7 3.701c.183-.022 4.597.018 7.369 3.83a9.569 9.569 0 0 0 2.242-6.164c0-5.298-4.311-9.61-9.61-9.61-5.299 0-9.61 4.312-9.61 9.61 0 2.292.807 4.4 2.151 6.054.887-1.178 2.042-1.989 2.909-2.483a.625.625 0 0 1 .62 1.085c-.807.459-1.892 1.225-2.662 2.33Zm14.38.575a.62.62 0 0 1-.104.106 10.826 10.826 0 0 1-7.684 3.193c-5.988 0-10.86-4.872-10.86-10.861C1.1 5.872 5.972 1 11.96 1c5.988 0 10.86 4.872 10.86 10.86 0 2.937-1.172 5.605-3.072 7.562Z" fill="#121214"></path></svg></span>
                </div>
            </div>
            <div id='banner'>
                <div ref={showLogin} className='main_login'>
                    <div className='login_box'>
                        <div onClick={hideDiv} className='cancel_icon'>
                            <RxCross2/>
                            </div>
                        <ul className='main_list'>
                            <div className='first_list'>
                                <li className='list_item'>Log in</li>
                                <li className='list_item'>Sign up</li>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path d="M18.86 7.3c.1.24.33.38.57.38.09 0 .17-.02.24-.06.32-.14.47-.5.33-.82l-1.42-3.29a2.285 2.285 0 0 0-2.1-1.38H7.51c-.92 0-1.74.54-2.1 1.38L3.99 6.8c-.13.32.02.68.33.82.31.14.68 0 .82-.32l1.42-3.29c.16-.37.54-.62.95-.62h8.98c.41 0 .79.24.95.62l1.42 3.29ZM19.49 13.92a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM6.11 15.52a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" fill="#121214"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.43 18.69H8.55v2.4c.02.69-.54 1.25-1.23 1.25H4.91c-.69 0-1.25-.56-1.25-1.25v-2.413a2.545 2.545 0 0 1-2.28-2.527V11.7c0-1.4 1.14-2.54 2.54-2.54h16.17c1.4 0 2.54 1.14 2.54 2.54v4.45a2.552 2.552 0 0 1-2.3 2.528v2.412c.02.69-.54 1.25-1.24 1.25h-2.41c-.69 0-1.25-.56-1.25-1.25v-2.4Zm3.66 0h-2.42v2.4h2.42v-2.4Zm-14.19 0h2.41v2.4H4.9v-2.4Zm-2.27-7c0-.71.58-1.29 1.29-1.29v.01h16.17c.71 0 1.29.58 1.29 1.29v4.44c0 .71-.58 1.29-1.29 1.29H3.92c-.71 0-1.29-.58-1.29-1.29v-4.45Z" fill="#121214"></path></svg><span>Become a host</span></li>
                            </div>
                            <hr />
                            <div className='second_list'>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path d="M9.022 8.73c-.37.38-.369 1 .02 1.38a.978.978 0 0 0 1.362.01c.369-.381.368-1-.021-1.38a.969.969 0 0 0-1.361-.01ZM10.405 10.118l.018-.018-.018.018ZM9.021 8.732l-.018.018.018-.018ZM6.473 12.74c-.39-.38-.39-1-.021-1.38a.969.969 0 0 1 1.36.01c.39.38.39.999.022 1.38a.978.978 0 0 1-1.361-.01Z" fill="#121214"></path><path d="M7.835 12.748a.944.944 0 0 0 .018-.018l-.018.018ZM6.451 11.362l-.018.018a.989.989 0 0 1 .018-.018Z" fill="#121214"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.07 8.18a3 3 0 0 0 3.232-2.99c0-1.65-1.34-2.99-2.99-2.99a3 3 0 0 0-2.99 2.984 4.135 4.135 0 0 0-1.75-.304c-1.24.02-2.4.51-3.27 1.4l-2.38 2.44a4.642 4.642 0 0 0 .07 6.56c.88.85 2.03 1.32 3.25 1.32h.04c1.24-.02 2.4-.51 3.27-1.4l2.39-2.44a4.643 4.643 0 0 0 1.129-4.58Zm-1.986-.988.072.078a3.393 3.393 0 0 1-.103 4.63l-2.38 2.43a3.37 3.37 0 0 1-2.39 1.02c-.93-.01-1.76-.34-2.41-.97a3.392 3.392 0 0 1-.06-4.79l2.38-2.44c.64-.64 1.49-1.01 2.4-1.01a3.386 3.386 0 0 1 2.49 1.052Zm1.006-.765a1.741 1.741 0 1 0 1.223-2.977 1.741 1.741 0 0 0-1.33 2.861l.107.116Z" fill="#121214"></path><path d="M15.823 9.26c.49.33 1.06.5 1.65.5 1.65 0 2.99-1.34 2.99-3.01 0-1.21-.72-2.29-1.84-2.76a.63.63 0 0 0-.82.34c-.13.32.02.69.34.82.65.27 1.07.9 1.07 1.61a1.741 1.741 0 0 1-2.7 1.45.629.629 0 0 0-.69 1.05Z" fill="#121214"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.243 15.81a1.408 1.408 0 0 1-1.31 1.406v3.144c0 .55-.38 1.05-.96 1.28-.23.09-.47.13-.71.13-.58 0-1.13-.25-1.44-.7-.16-.23-.24-.48-.24-.73v-3.123a1.408 1.408 0 0 1-1.32-1.407v-1.58c0-1.21.99-2.2 2.2-2.2h.18v-1.19c0-.35.28-.62.62-.62.34 0 .63.28.63.62v1.19h.15c1.21 0 2.2.99 2.2 2.2v1.58Zm-3.6-2.54v.57c0 .34.28.62.62.62.34 0 .62-.28.63-.62v-.57h.16c.52 0 .95.42.95.95v1.58c0 .09-.07.16-.16.16h-3.16c-.09 0-.16-.07-.16-.16v-1.58c0-.52.42-.95.95-.95h.17Zm.19 3.95v3.13c.1.14.41.24.69.13a.403.403 0 0 0 .17-.12v-3.14h-.86Z" fill="#121214"></path></svg><span>How Turo works</span></li>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.504 20.693h.335a3.316 3.316 0 0 0 3.313-3.313v-.633a4.184 4.184 0 0 0 3.817-4.163A4.185 4.185 0 0 0 18.15 8.42a6.2 6.2 0 0 0-1.87-4.349c-1.206-1.184-2.823-1.844-4.494-1.788-3.29.06-5.983 2.795-6.126 6.153A4.185 4.185 0 0 0 2 12.584a4.183 4.183 0 0 0 4.267 4.18.612.612 0 0 0 .612-.613v-6.55c1.111-.086 3.264-.428 4.573-1.725.127-.126.244-.257.349-.394.553.762 1.624 1.625 3.69 1.974a.615.615 0 0 0 .707-.502.614.614 0 0 0-.503-.706c-2.633-.446-3.15-1.802-3.244-2.175.06-.275.09-.563.09-.864a.612.612 0 1 0-1.225 0c0 .22-.022.427-.066.622a.599.599 0 0 0-.033.132c-.112.393-.32.738-.625 1.041-.985.978-2.726 1.272-3.702 1.36.175-2.66 2.314-4.808 4.918-4.857a5.035 5.035 0 0 1 3.614 1.44 4.984 4.984 0 0 1 1.504 3.583v8.85a2.09 2.09 0 0 1-2.088 2.088h-.335a1.631 1.631 0 0 0-1.51-1.016h-2.181c-.899 0-1.63.73-1.63 1.629a1.63 1.63 0 0 0 1.63 1.629h2.181a1.63 1.63 0 0 0 1.51-1.017ZM5.654 9.675a2.96 2.96 0 0 0-2.43 2.91 2.96 2.96 0 0 0 2.43 2.906V9.675Zm15.09 2.91a2.959 2.959 0 0 1-2.592 2.931V9.651a2.96 2.96 0 0 1 2.593 2.933ZM10.41 20.08a.41.41 0 0 1 .403-.404h2.183a.41.41 0 0 1 .404.404.41.41 0 0 1-.404.405h-2.182a.41.41 0 0 1-.405-.405Z" fill="#121214"></path><path d="M7.997 12.726a.613.613 0 0 1-.554-.873c.213-.454.845-1.22 1.865-1.22 1.014 0 1.656.76 1.876 1.212a.613.613 0 1 1-1.102.537c-.008-.016-.275-.525-.774-.525-.486 0-.739.483-.755.514v.002a.612.612 0 0 1-.556.353ZM15.861 12.726a.611.611 0 0 1-.55-.345l-.002-.001c-.02-.037-.286-.524-.775-.524-.492 0-.747.502-.757.523a.617.617 0 0 1-.817.283.61.61 0 0 1-.29-.81c.213-.453.845-1.22 1.864-1.22 1.015 0 1.658.761 1.877 1.213a.613.613 0 0 1-.55.88Z" fill="#121214"></path></svg><span>Contact support</span></li>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path d="M19.09 22.25H4.87c-.34 0-.62-.28-.62-.63v-20c0-.34.28-.62.62-.62h14.21c.35 0 .62.28.62.62 0 .34-.28.62-.62.62H5.5V21h12.96V4.71c0-.34.28-.62.62-.62.34 0 .62.28.62.62v16.92c.01.34-.27.62-.61.62Z" fill="#121214"></path><path d="M16.09 10.72H7.87c-.34 0-.62-.28-.62-.62 0-.34.28-.62.62-.62h8.22c.35 0 .62.28.62.62 0 .34-.27.62-.62.62ZM7.87 14.1h8.22c.35 0 .62-.29.62-.63s-.27-.62-.62-.62H7.87c-.34 0-.62.27-.62.62s.28.63.62.63ZM11.18 17.48H7.87c-.34 0-.62-.28-.62-.63s.28-.62.62-.62h3.31c.35 0 .62.28.62.62 0 .34-.28.63-.62.63ZM7.87 7.34h8.22c.35 0 .62-.28.62-.62 0-.34-.27-.62-.62-.62H7.87c-.34 0-.62.28-.62.62 0 .34.28.62.62.62Z" fill="#121214"></path></svg><span>Legal</span></li>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.001 21.958a.625.625 0 0 1-.251-1.197c.081-.036 8.131-3.626 8.131-9.08v-6.86c-1.301.527-4.677 1.307-7.88-1.497C8.867 6.067 5.566 5.38 4.12 4.868v6.813c0 3.326 2.953 5.955 5.43 7.574a.625.625 0 0 1-.683 1.047c-2.736-1.789-5.997-4.737-5.997-8.62v-7.05c0-.347.173-.673.464-.873a1.144 1.144 0 0 1 1.057-.123c1.407.538 4.17 1.083 6.847-1.306a1.147 1.147 0 0 1 1.525 0c2.677 2.39 5.439 1.845 6.848 1.306a1.145 1.145 0 0 1 1.056.123c.291.2.464.526.464.872v7.05c0 6.272-8.518 10.066-8.88 10.224a.621.621 0 0 1-.25.053Z" fill="#121214"></path></svg><span>Insurance & protection</span></li>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path d="M4.78 14.48a.63.63 0 0 1-.58-.38c-.13-.32.02-.68.33-.82.87-.36 1.86-.42 2.76-.15l5.83-5.83c-.11-.38-.17-.77-.17-1.16C12.96 3.86 14.82 2 17.1 2c.54 0 1.06.1 1.56.31a.635.635 0 0 1 .21 1.03l-1.44 1.44 1.04 1.04 1.44-1.44c.15-.15.36-.21.56-.17.21.04.38.18.46.38a4.11 4.11 0 0 1-.41 3.89c-.19.29-.58.36-.87.16a.615.615 0 0 1-.16-.87c.33-.48.5-1.04.5-1.62v-.08l-1.08 1.08a.62.62 0 0 1-.44.18c-.17 0-.32-.07-.44-.18L16.1 5.21a.628.628 0 0 1 0-.88l1.08-1.08c-1.62-.06-2.96 1.27-2.96 2.89 0 .37.07.74.22 1.09.1.23.04.5-.14.68l-6.38 6.38c-.18.18-.45.23-.68.14-.71-.29-1.51-.28-2.21.01-.09.03-.17.04-.25.04Z" fill="#121214"></path><path d="M6.14 21.23c-.54 0-1.06-.1-1.56-.31a.658.658 0 0 1-.38-.46c-.05-.21.02-.42.17-.56l1.5-1.5-1.04-1.04-1.5 1.5a.63.63 0 0 1-.57.17.604.604 0 0 1-.45-.37A4.02 4.02 0 0 1 2 17.1c0-.79.22-1.55.64-2.21a.62.62 0 0 1 .86-.19c.29.19.38.57.19.86-.29.46-.45 1-.45 1.54v.08l1.13-1.13c.24-.24.64-.24.88 0l1.92 1.92c.12.12.18.28.18.44 0 .16-.07.32-.18.44l-1.13 1.14c1.6.07 2.96-1.27 2.97-2.89 0-.38-.07-.74-.21-1.09-.1-.23-.04-.5.14-.68l6.38-6.38c.18-.18.44-.23.68-.14.71.29 1.51.28 2.21-.01.32-.13.69.02.82.33.13.32-.01.68-.33.82-.87.37-1.86.42-2.77.16l-5.83 5.83c.11.38.17.77.17 1.16 0 2.28-1.85 4.13-4.13 4.13ZM18.61 19.36a.62.62 0 0 1-.44-.18l-3.19-3.19a.628.628 0 0 1 0-.88c.24-.24.64-.24.88 0l3.19 3.19c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="#121214"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.93 20.98a2.3 2.3 0 0 0 1.64.68c.62 0 1.2-.25 1.65-.7l.63-.63c.44-.43.68-1.02.68-1.64 0-.62-.24-1.2-.68-1.64l-4.12-4.12c-.62-.62-1.71-.62-2.33 0l-1.59 1.59c-.31.31-.48.73-.48 1.17 0 .44.17.86.48 1.17l4.12 4.12Zm-1.65-7.16c.07-.08.17-.12.28-.12.11 0 .21.05.28.12l4.12 4.12c.2.2.31.47.31.76 0 .29-.11.56-.31.76l-.63.63c-.41.41-1.11.41-1.52 0l-4.12-4.12a.363.363 0 0 1-.12-.28c0-.11.04-.2.12-.28l1.59-1.59Z" fill="#121214"></path><path d="m5.29 3.7 1.3 2.28L9.61 9l-.74.74-3.02-3.02-2.28-1.3-.83-1.76.79-.79 1.76.83Z" fill="#121214"></path></svg><span>Host tools</span></li>
                                <li className='list_item'><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-0" role="img" version="1.1"><path d="M8.4 12.97a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm0 3.4a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm0 3.4a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm3.58-6.8a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm0 3.4a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm0 3.4a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm3.58-6.8a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm0 3.4a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm0 3.4a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82Zm.42-10.25h-8a.62.62 0 0 1-.62-.62V4.92c0-.34.28-.62.62-.62h8c.34 0 .62.28.62.62v3.97c0 .34-.28.62-.62.62v.01ZM8.6 8.27h6.75V5.55H8.61v2.72H8.6Z" fill="#221F1F"></path><path d="M19.09 22.63H4.87a.62.62 0 0 1-.62-.62V2c0-.34.28-.62.62-.62h14.22c.34 0 .62.28.62.62 0 .34-.28.62-.62.62H5.5v18.76h12.96V5.09c0-.34.28-.62.62-.62.34 0 .62.28.62.62V22c0 .34-.28.62-.62.62l.01.01Z" fill="#221F1F"></path></svg><span>Calculator</span></li>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Header;