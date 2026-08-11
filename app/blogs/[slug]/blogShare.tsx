
import { FaTelegram, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

const BlogShare = () => {

    return(
        <>
        <div className="blog-share flex justify-between border-t border-gray-200 pt-10 dark:border-gray-700">
            <div className="blog-share-title text-sm">
                <p>اشتراک گذاری</p>
            </div>
            <div className="blog-share-icon social-accounts mr-1.5 flex justify-start space-x-3 text-violet-950 dark:text-violet-300">
            <FaInstagram
                className="cursor-pointer transition-colors hover:text-violet-600"
                aria-hidden="true"
            />
            <FaTelegram
                className="cursor-pointer transition-colors hover:text-violet-600"
                aria-hidden="true"
            />
            <FaTwitter
                className="cursor-pointer transition-colors hover:text-violet-600"
                aria-hidden="true"
            />
            <FaYoutube
                className="cursor-pointer transition-colors hover:text-violet-600"
                aria-hidden="true"
            />
            </div>
        </div>
        </>
    )
}


export default BlogShare
