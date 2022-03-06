import { defaultFontFamily } from '../../helpers/make-font';

import { WatermarkOptions } from '../../model/watermark';

export const watermarkOptionsDefaults: WatermarkOptions = {
	color: 'rgba(0, 0, 0, 0)',
	visible: false,
	fontSize: 48,
	fontFamily: defaultFontFamily,
	fontStyle: '',
	text: '',
	vertOffset: 0,
	horzAlign: 'center',
	vertAlign: 'center',
};
