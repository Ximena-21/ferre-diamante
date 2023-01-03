export default function Contact() {
    return (
        <div className="contact">
            <div className="icon contact--whatsapp" onClick={() => { sendWaMessage('3125046724', 'Hola, estoy interesado en recibir más información. Gracias') }}>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8939 38.6757L12.6296 39.0406C15.6952 40.8649 19.1284 41.7163 22.5617 41.7163C33.3521 41.7163 42.1805 32.9595 42.1805 22.2568C42.1805 17.1488 40.0959 12.1623 36.4175 8.51355C32.7389 4.86485 27.8341 2.79736 22.5617 2.79736C11.7714 2.79736 2.94278 11.5541 3.06547 22.3785C3.06547 26.027 4.16903 29.5542 6.00823 32.5946L6.49866 33.3244L4.53694 40.5001L11.8939 38.6757Z" fill="#00E676" />
                    <path d="M38.5019 6.56756C34.3329 2.31088 28.5699 0 22.6842 0C10.1774 0 0.122695 10.0946 0.245215 22.3783C0.245215 26.2702 1.34877 30.0406 3.18814 33.4459L0 45L11.8939 41.9594C15.2046 43.7839 18.8829 44.6353 22.5617 44.6353C34.946 44.6353 45.0007 34.5405 45.0007 22.257C45.0007 16.2974 42.6707 10.7027 38.5019 6.56756ZM22.6842 40.865C19.3736 40.865 16.0629 40.0138 13.2427 38.3111L12.507 37.9462L5.39525 39.7704L7.23445 32.8381L6.74402 32.1083C1.34877 23.4732 3.92379 12.0405 12.7522 6.68908C21.5807 1.33782 32.9841 3.89192 38.3794 12.6487C43.7745 21.4054 41.1994 32.7163 32.3712 38.0677C29.5508 39.892 26.1176 40.865 22.6842 40.865ZM33.4746 27.3652L32.1258 26.757C32.1258 26.757 30.1641 25.9057 28.9378 25.2975C28.8151 25.2975 28.6926 25.1758 28.5699 25.1758C28.202 25.1758 27.9568 25.2975 27.7116 25.4192C27.7116 25.4192 27.589 25.5407 25.8724 27.4867C25.7497 27.7299 25.5045 27.8516 25.2592 27.8516H25.1365C25.014 27.8516 24.7688 27.7299 24.6461 27.6084L24.033 27.3652C22.6842 26.757 21.4581 26.0272 20.4771 25.0543C20.2319 24.8111 19.864 24.5678 19.6188 24.3246C18.7604 23.4732 17.9021 22.5002 17.2891 21.4056L17.1664 21.1624C17.0439 21.0407 17.0439 20.9191 16.9212 20.6759C16.9212 20.4327 16.9212 20.1895 17.0439 20.0678C17.0439 20.0678 17.5344 19.4596 17.9021 19.0949C18.1475 18.8515 18.27 18.4867 18.5152 18.2435C18.7604 17.8786 18.8831 17.3921 18.7604 17.0272C18.6379 16.4191 17.1664 13.1353 16.7987 12.4056C16.5533 12.0407 16.3083 11.9192 15.9404 11.7975H14.5916C14.3462 11.7975 14.1012 11.9192 13.8558 11.9192L13.7331 12.0407C13.4879 12.1624 13.2427 12.4056 12.9974 12.5271C12.7522 12.7705 12.6295 13.0136 12.3843 13.257C11.526 14.3516 11.0355 15.6894 11.0355 17.0272C11.0355 18.0001 11.2808 18.9732 11.6487 19.8245L11.7714 20.1895C12.8749 22.5002 14.3462 24.5678 16.3083 26.3921L16.7987 26.8785C17.1664 27.2435 17.5344 27.4867 17.7796 27.8514C20.3546 30.0408 23.2973 31.6218 26.608 32.4732C26.9759 32.5947 27.4663 32.5947 27.8343 32.7164H29.0603C29.6735 32.7164 30.4091 32.4732 30.8997 32.23C31.2674 31.9868 31.5127 31.9868 31.7579 31.7435L32.0033 31.5001C32.2485 31.2569 32.4937 31.1354 32.7389 30.8922C32.9841 30.6489 33.2293 30.4057 33.352 30.1623C33.5972 29.6759 33.7198 29.0677 33.8425 28.4598V27.6084C33.8425 27.6084 33.7198 27.4867 33.4746 27.3652Z" fill="white" />
                </svg>
            </div>
            <div className="icon contact--arrowUp" onClick={moveUp}>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 45C34.9065 45 45 34.9065 45 22.5C45 10.0935 34.9065 0 22.5 0C10.0935 0 0 10.0935 0 22.5C0 34.9065 10.0935 45 22.5 45ZM22.5 11.25L33.75 22.5H24.75V33.75H20.25V22.5H11.25L22.5 11.25Z" fill="#FFA826" />
                </svg>
            </div>
        </div>
    )
}


function sendWaMessage(number: string, textMessage: string) {

    const message: string = `https://wa.me/57${number}?text=${encodeURIComponent(textMessage)}`

    window.open(message, '_blank')?.focus()
}

function moveUp() {
    window.scrollTo(0, 0)
}