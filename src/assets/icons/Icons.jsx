import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope,
  faCalculator,
  faGaugeMed,
  faScrewdriverWrench,
  faAddressCard,
  faHome,
  faMusic,
  faFaceSadTear,
  faBrain,
  faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const icons = {
  envelope: <FontAwesomeIcon icon={faEnvelope} />,
  calculator: <FontAwesomeIcon icon={faCalculator} />,
  mileage: <FontAwesomeIcon icon={faGaugeMed} />,
  tools: <FontAwesomeIcon icon={faScrewdriverWrench} />,
  contacts: <FontAwesomeIcon icon={faAddressCard} />,
  home: <FontAwesomeIcon icon={faHome} />,
  music: <FontAwesomeIcon icon={faMusic} />,
  sadface: <FontAwesomeIcon icon={faFaceSadTear} />,
  brain: <FontAwesomeIcon icon={faBrain} />,
  newsPaper: <FontAwesomeIcon icon={faNewspaper} />
}
