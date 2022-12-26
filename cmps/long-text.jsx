const { useState, useEffect } = React

export function LongTxt({ text }) {
    const [isLong, setIsLong] = useState(false)
    // let isLong = false

    useEffect(() => {
        setTextStatus(text)
        console.log('isLong:', isLong)
    }, [])

    useEffect(() => {
        getTextToShow(text)
        console.log('isLong:', isLong)
    }, [isLong])

    function setTextStatus(text, length = 100) {
        if (text.length > length) setIsLong(true)
    }

    function getTextToShow(text) {
        if (isLong) {
            // isLong = true
            return text.substr(0, 100)
        }
        else return text
    }

    function isTextLong(text) {
        return text.length > 100
    }





    return (
        <p>{getTextToShow(text)} 
            {isTextLong(text) && <a className="green" onClick={() => setIsLong(!isLong)} >
                {isLong ? ' Continue Reading...' : ' Show less...'}</a>}
        </p>
    )
}

