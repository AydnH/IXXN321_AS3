import React from 'react';
import "../css/FilterBar.css";
import indus from "../images/indus.svg";
import inter from "../images/inter.svg";
import media from "../images/media.svg";
import graph from "../images/graph.svg";

export default function FilterBar() {
    return (
        <div id='FilterBarCont'>
            
            <a className='disCont indusCont' href="">
                {/* <img src={indus}/> */}
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M240 0.000488281H0V240H240V0.000488281ZM10.5973 132.469H16.7496V106.875H10.5973V132.469ZM38.0789 132.469H44.2137V106.875H38.0613V122.801L29.0086 106.875H22.8387V132.469H29.0086V116.543L38.0789 132.469ZM49.916 106.875V132.469H58.3359C60.5508 132.457 62.5547 131.93 64.3477 130.887C66.1523 129.832 67.5469 128.379 68.5312 126.528C69.5273 124.664 70.0254 122.561 70.0254 120.217V119.039C70.0137 116.719 69.498 114.627 68.4785 112.764C67.4707 110.889 66.0645 109.442 64.2598 108.422C62.4551 107.391 60.4219 106.875 58.1602 106.875H49.916ZM56.0859 127.723V111.639H58.1602C59.9766 111.639 61.3594 112.266 62.3086 113.52C63.2578 114.774 63.7324 116.637 63.7324 119.11V120.217C63.7324 122.701 63.2578 124.576 62.3086 125.842C61.3594 127.096 60 127.723 58.2305 127.723H56.0859ZM95.0637 123.627V106.875H88.8938V123.592C88.8938 125.174 88.5656 126.317 87.9094 127.02C87.2531 127.723 86.2863 128.074 85.009 128.074C82.4777 128.074 81.177 126.674 81.1066 123.873V106.875H74.9016V123.75C74.9367 126.563 75.8508 128.778 77.6438 130.395C79.4367 132.012 81.8918 132.821 85.009 132.821C87.0715 132.821 88.8586 132.457 90.3703 131.731C91.882 131.004 93.0422 129.949 93.8508 128.567C94.6594 127.172 95.0637 125.526 95.0637 123.627ZM112.965 123.557C113.61 124.061 113.932 124.764 113.932 125.666C113.932 126.463 113.633 127.084 113.036 127.53C112.45 127.963 111.647 128.18 110.627 128.18C109.034 128.18 107.879 127.858 107.164 127.213C106.461 126.557 106.11 125.543 106.11 124.172H99.9223C99.9223 125.86 100.344 127.354 101.188 128.655C102.043 129.944 103.309 130.963 104.985 131.713C106.672 132.451 108.553 132.821 110.627 132.821C113.569 132.821 115.883 132.182 117.571 130.905C119.258 129.627 120.102 127.869 120.102 125.631C120.102 122.83 118.719 120.633 115.954 119.039C114.817 118.383 113.364 117.774 111.594 117.211C109.825 116.637 108.588 116.086 107.885 115.559C107.182 115.02 106.83 114.422 106.83 113.766C106.83 113.016 107.147 112.401 107.78 111.92C108.424 111.428 109.297 111.182 110.399 111.182C111.489 111.182 112.35 111.469 112.983 112.043C113.627 112.617 113.95 113.426 113.95 114.469H120.102C120.102 112.91 119.698 111.528 118.889 110.321C118.08 109.102 116.944 108.164 115.479 107.508C114.026 106.852 112.379 106.524 110.539 106.524C108.653 106.524 106.954 106.828 105.442 107.438C103.93 108.035 102.758 108.879 101.926 109.969C101.106 111.047 100.696 112.295 100.696 113.713C100.696 116.561 102.354 118.799 105.67 120.428C106.69 120.932 108.002 121.453 109.608 121.992C111.213 122.531 112.332 123.053 112.965 123.557ZM137.476 111.639H145.158V106.875H123.765V111.639H131.306V132.469H137.476V111.639ZM155.747 123.434H159.087L163.604 132.469H170.214V132.205L164.87 121.887C166.405 121.16 167.53 120.211 168.245 119.039C168.971 117.867 169.335 116.391 169.335 114.61C169.335 112.149 168.479 110.244 166.768 108.897C165.057 107.549 162.684 106.875 159.649 106.875H149.577V132.469H155.747V123.434ZM159.649 118.67H155.747V111.639H159.649C160.809 111.639 161.688 111.955 162.286 112.588C162.884 113.209 163.182 114.071 163.182 115.172C163.182 116.274 162.884 117.135 162.286 117.756C161.7 118.365 160.821 118.67 159.649 118.67ZM175.283 132.469H181.436V106.875H175.283V132.469ZM193.923 127.688H202.378L203.872 132.469H210.499L201.042 106.875H195.241L185.855 132.469H192.446L193.923 127.688ZM200.902 122.924H195.4L198.142 114.047L200.902 122.924ZM231.09 127.723H220.35V106.875H214.18V132.469H231.09V127.723Z"/>
                </svg>

            </a>

            <a className='disCont interCont' href="">
                {/* <img src={inter}/> */}
                <svg width="241" height="240" viewBox="0 0 241 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M240.021 0H0.0211182V240H240.021V0ZM117.662 123.627V106.875H111.492V123.592C111.492 125.174 111.164 126.316 110.508 127.019C109.852 127.722 108.885 128.074 107.607 128.074C105.076 128.074 103.775 126.674 103.705 123.873V106.875H97.5001V123.75C97.5352 126.562 98.4493 128.777 100.242 130.394C102.035 132.011 104.49 132.82 107.607 132.82C109.67 132.82 111.457 132.457 112.969 131.73C114.481 131.004 115.641 129.949 116.449 128.566C117.258 127.172 117.662 125.525 117.662 123.627ZM137.058 106.875L132.874 115.383L128.691 106.875H121.659L128.796 119.566L121.466 132.469H128.568L132.874 123.802L137.181 132.469H144.3L136.952 119.566L144.107 106.875H137.058Z"/>
                </svg>
            </a>

            <a className='disCont mediaCont' href="">
                {/* <img src={media}/> */}
                <svg width="241" height="240" viewBox="0 0 241 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M240.042 0H0.0422363V240H240.042V0ZM76.8388 124.681L71.1259 106.875H63.0224V132.469H69.1923V126.492L68.5946 114.24L74.7997 132.469H78.8778L85.0653 114.258L84.4677 126.492V132.469H90.6552V106.875H82.5341L76.8388 124.681ZM102.563 121.623H112.266V117.035H102.563V111.638H114.059V106.875H96.3927V132.469H114.024V127.722H102.563V121.623ZM118.337 106.875V132.469H126.757C128.972 132.457 130.976 131.929 132.769 130.886C134.574 129.832 135.968 128.379 136.952 126.527C137.949 124.664 138.447 122.56 138.447 120.217V119.039C138.435 116.719 137.919 114.627 136.9 112.763C135.892 110.888 134.486 109.441 132.681 108.422C130.876 107.39 128.843 106.875 126.581 106.875H118.337ZM124.507 127.722V111.638H126.581C128.398 111.638 129.781 112.265 130.73 113.519C131.679 114.773 132.154 116.636 132.154 119.109V120.217C132.154 122.701 131.679 124.576 130.73 125.842C129.781 127.095 128.421 127.722 126.652 127.722H124.507ZM143.833 132.469H149.985V106.875H143.833V132.469ZM162.472 127.687H170.927L172.422 132.469H179.049L169.592 106.875H163.791L154.404 132.469H160.996L162.472 127.687ZM169.451 122.924H163.949L166.691 114.047L169.451 122.924Z"/>
                </svg>

            </a>

            <a className='disCont graphCont' href="">
                {/* <img src={graph}/> */}
                <svg width="241" height="240" viewBox="0 0 241 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M240.063 0H0.0634155V240H240.063V0ZM55.4779 131.853C57.306 131.209 58.6947 130.359 59.6439 129.304V118.793H49.1849V123.029H53.474V127.002C52.6888 127.717 51.4935 128.074 49.888 128.074C48.013 128.074 46.6361 127.435 45.7572 126.158C44.89 124.869 44.4564 122.947 44.4564 120.392V118.845C44.4681 116.408 44.8958 114.533 45.7396 113.22C46.5833 111.908 47.7786 111.252 49.3255 111.252C50.6146 111.252 51.6107 111.556 52.3138 112.166C53.0169 112.775 53.474 113.795 53.6849 115.224H59.6263C59.3333 112.33 58.3021 110.156 56.5326 108.703C54.7747 107.238 52.3021 106.506 49.1146 106.506C46.9349 106.506 45.013 107.015 43.349 108.035C41.6966 109.043 40.4251 110.49 39.5345 112.377C38.6439 114.252 38.1986 116.449 38.1986 118.969L38.2161 121.183C38.3568 124.84 39.429 127.693 41.4329 129.744C43.4369 131.795 46.1146 132.82 49.4661 132.82C51.6458 132.82 53.6497 132.498 55.4779 131.853ZM71.1997 123.433H74.5396L79.0572 132.469H85.6665V132.205L80.3228 121.886C81.8579 121.16 82.9829 120.211 83.6978 119.039C84.4243 117.867 84.7876 116.39 84.7876 114.609C84.7876 112.148 83.9322 110.244 82.2212 108.896C80.5103 107.549 78.1372 106.875 75.1021 106.875H65.0298V132.469H71.1997V123.433ZM75.1021 118.67H71.1997V111.638H75.1021C76.2622 111.638 77.1411 111.955 77.7388 112.588C78.3365 113.209 78.6353 114.07 78.6353 115.172C78.6353 116.273 78.3365 117.135 77.7388 117.756C77.1529 118.365 76.274 118.67 75.1021 118.67ZM96.3962 127.687H104.851L106.345 132.469H112.972L103.515 106.875H97.7146L88.3279 132.469H94.9197L96.3962 127.687ZM103.375 122.924H97.8728L100.615 114.047L103.375 122.924ZM122.823 132.469V123.785H126.761C129.878 123.785 132.327 123.041 134.108 121.552C135.901 120.052 136.798 118.054 136.798 115.558C136.798 113.871 136.382 112.365 135.55 111.041C134.729 109.705 133.563 108.679 132.052 107.965C130.552 107.238 128.823 106.875 126.866 106.875H116.653V132.469H122.823ZM126.866 119.021H122.823V111.638H126.936C128.05 111.65 128.929 112.013 129.573 112.728C130.218 113.443 130.54 114.398 130.54 115.594C130.54 116.683 130.224 117.527 129.591 118.125C128.97 118.722 128.061 119.021 126.866 119.021ZM157.16 132.469H163.295V106.875H157.16V117.035H148.072V106.875H141.902V132.469H148.072V121.781H157.16V132.469ZM169.437 132.469H175.589V106.875H169.437V132.469ZM200.944 128.531C201.823 127.16 202.303 125.584 202.385 123.802H196.251C196.204 125.256 195.805 126.316 195.055 126.984C194.305 127.652 193.221 127.986 191.803 127.986C190.127 127.986 188.944 127.4 188.252 126.228C187.573 125.056 187.233 123.105 187.233 120.375V118.564C187.268 116.045 187.643 114.211 188.358 113.062C189.073 111.914 190.198 111.34 191.733 111.34C193.245 111.34 194.37 111.679 195.108 112.359C195.846 113.039 196.239 114.158 196.286 115.717H202.438C202.18 112.845 201.108 110.595 199.221 108.967C197.335 107.326 194.838 106.506 191.733 106.506C189.577 106.506 187.678 107.021 186.038 108.052C184.397 109.072 183.137 110.525 182.258 112.412C181.391 114.287 180.958 116.478 180.958 118.986V120.252C180.958 124.248 181.924 127.342 183.858 129.533C185.792 131.724 188.44 132.82 191.803 132.82C193.842 132.82 195.653 132.445 197.235 131.695C198.829 130.945 200.065 129.89 200.944 128.531Z"/>
                </svg>

            </a>
            
        </div>
    )
}
