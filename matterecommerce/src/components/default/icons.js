import React from "react";
import Styled from 'styled-components';

const MatterLogoWrapper = Styled.div`
width: 120px;
`

export class MatterLogo extends React.Component {
    render() {
        return (
            <MatterLogoWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 22">
                    <defs/>
                    <path fill="#030303" fill-rule="evenodd" d="M21.1290354 4.8966062c-2.3835129 0-5.035843.9029202-6.3978504 3.4554064-1.0931901-2.1531176-3.4050184-3.4554064-6.3620081-3.4554064-2.0788534 0-4.3369182.7119179-5.7168468 2.6740331v-2.34412H0v16.4435675h2.6881724v-9.2722967c0-3.1254933 2.3476706-5.035517 5.1971334-5.035517 3.1003589 0 4.8924739 1.8405683 4.8924739 4.9660615v9.3417522h2.6702513v-9.2722967c0-3.1254933 2.3476706-5.035517 5.1971334-5.035517 3.1182796 0 4.9103946 1.8405683 4.9103946 4.9660615v9.3417522h2.670252V11.4775059c0-3.976322-2.885305-6.5808997-7.0967756-6.5808997zm29.2293896.3299131v16.4435675h-2.670251v-2.4483031C46.344087 20.9060773 44.283155 22 41.487456 22c-4.767026 0-8.476704-3.6116811-8.476704-8.5603788 0-4.9313339 3.709678-8.543015 8.476704-8.543015 2.795699 0 4.856631 1.1112865 6.200718 2.7782162V5.2265193h2.670251zm-8.548389 2.1010261c-3.637993 0-6.075269 2.7261247-6.075269 6.1120758 0 3.4033149 2.473118 6.1294396 6.075269 6.1294396 3.530467 0 6.039428-2.6393055 6.039428-6.1294396 0-3.4727704-2.508961-6.1120758-6.039428-6.1120758zm26.344087-2.1010261h-7.32975V0h-2.670252v5.2265193h-3.709678v2.34412h3.709678v8.3520126C58.154121 20.0552486 60.32258 22 63.978495 22c2.078853 0 3.763441-.6945541 5.035843-1.6322021l-1.254481-1.9621152c-.985663.6945541-2.258064 1.1633781-3.566308 1.1633781-1.971327 0-3.369176-1.1286504-3.369176-3.6985004V7.5706393h7.32975v-2.34412zm16.236559 0h-7.329751V0H74.39068v5.2265193h-3.709678v2.34412h3.709678v8.3520126C74.39068 20.0552486 76.559139 22 80.215054 22c2.078853 0 3.763441-.6945541 5.035843-1.6322021l-1.254481-1.9621152c-.985663.6945541-2.258064 1.1633781-3.566308 1.1633781-1.971327 0-3.369177-1.1286504-3.369177-3.6985004V7.5706393h7.329751v-2.34412zm11.845877-.3299131c4.605735 0 7.939069 3.4901341 7.974911 8.4909234 0 .3299132-.017921.6771902-.053763.9723757H90.555554c.376345 3.5422257 2.939069 5.3654301 6.003586 5.3654301 2.096774 0 3.924731-.7813733 5.376344-2.0662983l1.433692 1.7711129C101.254481 21.3922652 98.888889 22 96.397849 22c-5.017922 0-8.58423-3.4554065-8.58423-8.543015 0-5.035517 3.584229-8.5603788 8.42294-8.5603788zm-.053764 2.3093922c-3.136201 0-5.161291 2.0836622-5.591398 5.0528808h10.896059c-.340502-3.0734017-2.419355-5.0528808-5.304661-5.0528808zm20.698925-2.3093922c-2.078853 0-3.870968.9550118-5.035843 2.6393054V5.2265193h-2.65233v16.4435675h2.670251v-9.2028413c0-3.1081295 1.899642-5.1223363 4.551972-5.1223363.985663 0 2.114696.2257301 2.939069.6598264L120 5.4522494c-.896057-.3993686-1.899642-.5556432-3.11828-.5556432z"/>
                </svg>
            </MatterLogoWrapper>
        )
    }
}