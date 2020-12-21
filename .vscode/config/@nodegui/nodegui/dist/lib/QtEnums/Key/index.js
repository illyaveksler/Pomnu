"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
var Key;
(function (Key) {
    Key[Key["Key_Escape"] = 16777216] = "Key_Escape";
    Key[Key["Key_Tab"] = 16777217] = "Key_Tab";
    Key[Key["Key_Backtab"] = 16777218] = "Key_Backtab";
    Key[Key["Key_Backspace"] = 16777219] = "Key_Backspace";
    Key[Key["Key_Return"] = 16777220] = "Key_Return";
    Key[Key["Key_Enter"] = 16777221] = "Key_Enter";
    Key[Key["Key_Insert"] = 16777222] = "Key_Insert";
    Key[Key["Key_Delete"] = 16777223] = "Key_Delete";
    Key[Key["Key_Pause"] = 16777224] = "Key_Pause";
    Key[Key["Key_Print"] = 16777225] = "Key_Print";
    Key[Key["Key_SysReq"] = 16777226] = "Key_SysReq";
    Key[Key["Key_Clear"] = 16777227] = "Key_Clear";
    Key[Key["Key_Home"] = 16777232] = "Key_Home";
    Key[Key["Key_End"] = 16777233] = "Key_End";
    Key[Key["Key_Left"] = 16777234] = "Key_Left";
    Key[Key["Key_Up"] = 16777235] = "Key_Up";
    Key[Key["Key_Right"] = 16777236] = "Key_Right";
    Key[Key["Key_Down"] = 16777237] = "Key_Down";
    Key[Key["Key_PageUp"] = 16777238] = "Key_PageUp";
    Key[Key["Key_PageDown"] = 16777239] = "Key_PageDown";
    Key[Key["Key_Shift"] = 16777248] = "Key_Shift";
    Key[Key["Key_Control"] = 16777249] = "Key_Control";
    Key[Key["Key_Meta"] = 16777250] = "Key_Meta";
    Key[Key["Key_Alt"] = 16777251] = "Key_Alt";
    Key[Key["Key_AltGr"] = 16781571] = "Key_AltGr";
    Key[Key["Key_CapsLock"] = 16777252] = "Key_CapsLock";
    Key[Key["Key_NumLock"] = 16777253] = "Key_NumLock";
    Key[Key["Key_ScrollLock"] = 16777254] = "Key_ScrollLock";
    Key[Key["Key_F1"] = 16777264] = "Key_F1";
    Key[Key["Key_F2"] = 16777265] = "Key_F2";
    Key[Key["Key_F3"] = 16777266] = "Key_F3";
    Key[Key["Key_F4"] = 16777267] = "Key_F4";
    Key[Key["Key_F5"] = 16777268] = "Key_F5";
    Key[Key["Key_F6"] = 16777269] = "Key_F6";
    Key[Key["Key_F7"] = 16777270] = "Key_F7";
    Key[Key["Key_F8"] = 16777271] = "Key_F8";
    Key[Key["Key_F9"] = 16777272] = "Key_F9";
    Key[Key["Key_F10"] = 16777273] = "Key_F10";
    Key[Key["Key_F11"] = 16777274] = "Key_F11";
    Key[Key["Key_F12"] = 16777275] = "Key_F12";
    Key[Key["Key_F13"] = 16777276] = "Key_F13";
    Key[Key["Key_F14"] = 16777277] = "Key_F14";
    Key[Key["Key_F15"] = 16777278] = "Key_F15";
    Key[Key["Key_F16"] = 16777279] = "Key_F16";
    Key[Key["Key_F17"] = 16777280] = "Key_F17";
    Key[Key["Key_F18"] = 16777281] = "Key_F18";
    Key[Key["Key_F19"] = 16777282] = "Key_F19";
    Key[Key["Key_F20"] = 16777283] = "Key_F20";
    Key[Key["Key_F21"] = 16777284] = "Key_F21";
    Key[Key["Key_F22"] = 16777285] = "Key_F22";
    Key[Key["Key_F23"] = 16777286] = "Key_F23";
    Key[Key["Key_F24"] = 16777287] = "Key_F24";
    Key[Key["Key_F25"] = 16777288] = "Key_F25";
    Key[Key["Key_F26"] = 16777289] = "Key_F26";
    Key[Key["Key_F27"] = 16777290] = "Key_F27";
    Key[Key["Key_F28"] = 16777291] = "Key_F28";
    Key[Key["Key_F29"] = 16777292] = "Key_F29";
    Key[Key["Key_F30"] = 16777293] = "Key_F30";
    Key[Key["Key_F31"] = 16777294] = "Key_F31";
    Key[Key["Key_F32"] = 16777295] = "Key_F32";
    Key[Key["Key_F33"] = 16777296] = "Key_F33";
    Key[Key["Key_F34"] = 16777297] = "Key_F34";
    Key[Key["Key_F35"] = 16777298] = "Key_F35";
    Key[Key["Key_Super_L"] = 16777299] = "Key_Super_L";
    Key[Key["Key_Super_R"] = 16777300] = "Key_Super_R";
    Key[Key["Key_Menu"] = 16777301] = "Key_Menu";
    Key[Key["Key_Hyper_L"] = 16777302] = "Key_Hyper_L";
    Key[Key["Key_Hyper_R"] = 16777303] = "Key_Hyper_R";
    Key[Key["Key_Help"] = 16777304] = "Key_Help";
    Key[Key["Key_Direction_L"] = 16777305] = "Key_Direction_L";
    Key[Key["Key_Direction_R"] = 16777312] = "Key_Direction_R";
    Key[Key["Key_Space"] = 32] = "Key_Space";
    Key[Key["Key_Any"] = 32] = "Key_Any";
    Key[Key["Key_Exclam"] = 33] = "Key_Exclam";
    Key[Key["Key_QuoteDbl"] = 34] = "Key_QuoteDbl";
    Key[Key["Key_NumberSign"] = 35] = "Key_NumberSign";
    Key[Key["Key_Dollar"] = 36] = "Key_Dollar";
    Key[Key["Key_Percent"] = 37] = "Key_Percent";
    Key[Key["Key_Ampersand"] = 38] = "Key_Ampersand";
    Key[Key["Key_Apostrophe"] = 39] = "Key_Apostrophe";
    Key[Key["Key_ParenLeft"] = 40] = "Key_ParenLeft";
    Key[Key["Key_ParenRight"] = 41] = "Key_ParenRight";
    Key[Key["Key_Asterisk"] = 42] = "Key_Asterisk";
    Key[Key["Key_Plus"] = 43] = "Key_Plus";
    Key[Key["Key_Comma"] = 44] = "Key_Comma";
    Key[Key["Key_Minus"] = 45] = "Key_Minus";
    Key[Key["Key_Period"] = 46] = "Key_Period";
    Key[Key["Key_Slash"] = 47] = "Key_Slash";
    Key[Key["Key_0"] = 48] = "Key_0";
    Key[Key["Key_1"] = 49] = "Key_1";
    Key[Key["Key_2"] = 50] = "Key_2";
    Key[Key["Key_3"] = 51] = "Key_3";
    Key[Key["Key_4"] = 52] = "Key_4";
    Key[Key["Key_5"] = 53] = "Key_5";
    Key[Key["Key_6"] = 54] = "Key_6";
    Key[Key["Key_7"] = 55] = "Key_7";
    Key[Key["Key_8"] = 56] = "Key_8";
    Key[Key["Key_9"] = 57] = "Key_9";
    Key[Key["Key_Colon"] = 58] = "Key_Colon";
    Key[Key["Key_Semicolon"] = 59] = "Key_Semicolon";
    Key[Key["Key_Less"] = 60] = "Key_Less";
    Key[Key["Key_Equal"] = 61] = "Key_Equal";
    Key[Key["Key_Greater"] = 62] = "Key_Greater";
    Key[Key["Key_Question"] = 63] = "Key_Question";
    Key[Key["Key_At"] = 64] = "Key_At";
    Key[Key["Key_A"] = 65] = "Key_A";
    Key[Key["Key_B"] = 66] = "Key_B";
    Key[Key["Key_C"] = 67] = "Key_C";
    Key[Key["Key_D"] = 68] = "Key_D";
    Key[Key["Key_E"] = 69] = "Key_E";
    Key[Key["Key_F"] = 70] = "Key_F";
    Key[Key["Key_G"] = 71] = "Key_G";
    Key[Key["Key_H"] = 72] = "Key_H";
    Key[Key["Key_I"] = 73] = "Key_I";
    Key[Key["Key_J"] = 74] = "Key_J";
    Key[Key["Key_K"] = 75] = "Key_K";
    Key[Key["Key_L"] = 76] = "Key_L";
    Key[Key["Key_M"] = 77] = "Key_M";
    Key[Key["Key_N"] = 78] = "Key_N";
    Key[Key["Key_O"] = 79] = "Key_O";
    Key[Key["Key_P"] = 80] = "Key_P";
    Key[Key["Key_Q"] = 81] = "Key_Q";
    Key[Key["Key_R"] = 82] = "Key_R";
    Key[Key["Key_S"] = 83] = "Key_S";
    Key[Key["Key_T"] = 84] = "Key_T";
    Key[Key["Key_U"] = 85] = "Key_U";
    Key[Key["Key_V"] = 86] = "Key_V";
    Key[Key["Key_W"] = 87] = "Key_W";
    Key[Key["Key_X"] = 88] = "Key_X";
    Key[Key["Key_Y"] = 89] = "Key_Y";
    Key[Key["Key_Z"] = 90] = "Key_Z";
    Key[Key["Key_BracketLeft"] = 91] = "Key_BracketLeft";
    Key[Key["Key_Backslash"] = 92] = "Key_Backslash";
    Key[Key["Key_BracketRight"] = 93] = "Key_BracketRight";
    Key[Key["Key_AsciiCircum"] = 94] = "Key_AsciiCircum";
    Key[Key["Key_Underscore"] = 95] = "Key_Underscore";
    Key[Key["Key_QuoteLeft"] = 96] = "Key_QuoteLeft";
    Key[Key["Key_BraceLeft"] = 123] = "Key_BraceLeft";
    Key[Key["Key_Bar"] = 124] = "Key_Bar";
    Key[Key["Key_BraceRight"] = 125] = "Key_BraceRight";
    Key[Key["Key_AsciiTilde"] = 126] = "Key_AsciiTilde";
    Key[Key["Key_nobreakspace"] = 160] = "Key_nobreakspace";
    Key[Key["Key_exclamdown"] = 161] = "Key_exclamdown";
    Key[Key["Key_cent"] = 162] = "Key_cent";
    Key[Key["Key_sterling"] = 163] = "Key_sterling";
    Key[Key["Key_currency"] = 164] = "Key_currency";
    Key[Key["Key_yen"] = 165] = "Key_yen";
    Key[Key["Key_brokenbar"] = 166] = "Key_brokenbar";
    Key[Key["Key_section"] = 167] = "Key_section";
    Key[Key["Key_diaeresis"] = 168] = "Key_diaeresis";
    Key[Key["Key_copyright"] = 169] = "Key_copyright";
    Key[Key["Key_ordfeminine"] = 170] = "Key_ordfeminine";
    Key[Key["Key_guillemotleft"] = 171] = "Key_guillemotleft";
    Key[Key["Key_notsign"] = 172] = "Key_notsign";
    Key[Key["Key_hyphen"] = 173] = "Key_hyphen";
    Key[Key["Key_registered"] = 174] = "Key_registered";
    Key[Key["Key_macron"] = 175] = "Key_macron";
    Key[Key["Key_degree"] = 176] = "Key_degree";
    Key[Key["Key_plusminus"] = 177] = "Key_plusminus";
    Key[Key["Key_twosuperior"] = 178] = "Key_twosuperior";
    Key[Key["Key_threesuperior"] = 179] = "Key_threesuperior";
    Key[Key["Key_acute"] = 180] = "Key_acute";
    Key[Key["Key_mu"] = 181] = "Key_mu";
    Key[Key["Key_paragraph"] = 182] = "Key_paragraph";
    Key[Key["Key_periodcentered"] = 183] = "Key_periodcentered";
    Key[Key["Key_cedilla"] = 184] = "Key_cedilla";
    Key[Key["Key_onesuperior"] = 185] = "Key_onesuperior";
    Key[Key["Key_masculine"] = 186] = "Key_masculine";
    Key[Key["Key_guillemotright"] = 187] = "Key_guillemotright";
    Key[Key["Key_onequarter"] = 188] = "Key_onequarter";
    Key[Key["Key_onehalf"] = 189] = "Key_onehalf";
    Key[Key["Key_threequarters"] = 190] = "Key_threequarters";
    Key[Key["Key_questiondown"] = 191] = "Key_questiondown";
    Key[Key["Key_Agrave"] = 192] = "Key_Agrave";
    Key[Key["Key_Aacute"] = 193] = "Key_Aacute";
    Key[Key["Key_Acircumflex"] = 194] = "Key_Acircumflex";
    Key[Key["Key_Atilde"] = 195] = "Key_Atilde";
    Key[Key["Key_Adiaeresis"] = 196] = "Key_Adiaeresis";
    Key[Key["Key_Aring"] = 197] = "Key_Aring";
    Key[Key["Key_AE"] = 198] = "Key_AE";
    Key[Key["Key_Ccedilla"] = 199] = "Key_Ccedilla";
    Key[Key["Key_Egrave"] = 200] = "Key_Egrave";
    Key[Key["Key_Eacute"] = 201] = "Key_Eacute";
    Key[Key["Key_Ecircumflex"] = 202] = "Key_Ecircumflex";
    Key[Key["Key_Ediaeresis"] = 203] = "Key_Ediaeresis";
    Key[Key["Key_Igrave"] = 204] = "Key_Igrave";
    Key[Key["Key_Iacute"] = 205] = "Key_Iacute";
    Key[Key["Key_Icircumflex"] = 206] = "Key_Icircumflex";
    Key[Key["Key_Idiaeresis"] = 207] = "Key_Idiaeresis";
    Key[Key["Key_ETH"] = 208] = "Key_ETH";
    Key[Key["Key_Ntilde"] = 209] = "Key_Ntilde";
    Key[Key["Key_Ograve"] = 210] = "Key_Ograve";
    Key[Key["Key_Oacute"] = 211] = "Key_Oacute";
    Key[Key["Key_Ocircumflex"] = 212] = "Key_Ocircumflex";
    Key[Key["Key_Otilde"] = 213] = "Key_Otilde";
    Key[Key["Key_Odiaeresis"] = 214] = "Key_Odiaeresis";
    Key[Key["Key_multiply"] = 215] = "Key_multiply";
    Key[Key["Key_Ooblique"] = 216] = "Key_Ooblique";
    Key[Key["Key_Ugrave"] = 217] = "Key_Ugrave";
    Key[Key["Key_Uacute"] = 218] = "Key_Uacute";
    Key[Key["Key_Ucircumflex"] = 219] = "Key_Ucircumflex";
    Key[Key["Key_Udiaeresis"] = 220] = "Key_Udiaeresis";
    Key[Key["Key_Yacute"] = 221] = "Key_Yacute";
    Key[Key["Key_THORN"] = 222] = "Key_THORN";
    Key[Key["Key_ssharp"] = 223] = "Key_ssharp";
    Key[Key["Key_division"] = 247] = "Key_division";
    Key[Key["Key_ydiaeresis"] = 255] = "Key_ydiaeresis";
    Key[Key["Key_Multi_key"] = 16781600] = "Key_Multi_key";
    Key[Key["Key_Codeinput"] = 16781623] = "Key_Codeinput";
    Key[Key["Key_SingleCandidate"] = 16781628] = "Key_SingleCandidate";
    Key[Key["Key_MultipleCandidate"] = 16781629] = "Key_MultipleCandidate";
    Key[Key["Key_PreviousCandidate"] = 16781630] = "Key_PreviousCandidate";
    Key[Key["Key_Mode_switch"] = 16781694] = "Key_Mode_switch";
    Key[Key["Key_Kanji"] = 16781601] = "Key_Kanji";
    Key[Key["Key_Muhenkan"] = 16781602] = "Key_Muhenkan";
    Key[Key["Key_Henkan"] = 16781603] = "Key_Henkan";
    Key[Key["Key_Romaji"] = 16781604] = "Key_Romaji";
    Key[Key["Key_Hiragana"] = 16781605] = "Key_Hiragana";
    Key[Key["Key_Katakana"] = 16781606] = "Key_Katakana";
    Key[Key["Key_Hiragana_Katakana"] = 16781607] = "Key_Hiragana_Katakana";
    Key[Key["Key_Zenkaku"] = 16781608] = "Key_Zenkaku";
    Key[Key["Key_Hankaku"] = 16781609] = "Key_Hankaku";
    Key[Key["Key_Zenkaku_Hankaku"] = 16781610] = "Key_Zenkaku_Hankaku";
    Key[Key["Key_Touroku"] = 16781611] = "Key_Touroku";
    Key[Key["Key_Massyo"] = 16781612] = "Key_Massyo";
    Key[Key["Key_Kana_Lock"] = 16781613] = "Key_Kana_Lock";
    Key[Key["Key_Kana_Shift"] = 16781614] = "Key_Kana_Shift";
    Key[Key["Key_Eisu_Shift"] = 16781615] = "Key_Eisu_Shift";
    Key[Key["Key_Eisu_toggle"] = 16781616] = "Key_Eisu_toggle";
    Key[Key["Key_Hangul"] = 16781617] = "Key_Hangul";
    Key[Key["Key_Hangul_Start"] = 16781618] = "Key_Hangul_Start";
    Key[Key["Key_Hangul_End"] = 16781619] = "Key_Hangul_End";
    Key[Key["Key_Hangul_Hanja"] = 16781620] = "Key_Hangul_Hanja";
    Key[Key["Key_Hangul_Jamo"] = 16781621] = "Key_Hangul_Jamo";
    Key[Key["Key_Hangul_Romaja"] = 16781622] = "Key_Hangul_Romaja";
    Key[Key["Key_Hangul_Jeonja"] = 16781624] = "Key_Hangul_Jeonja";
    Key[Key["Key_Hangul_Banja"] = 16781625] = "Key_Hangul_Banja";
    Key[Key["Key_Hangul_PreHanja"] = 16781626] = "Key_Hangul_PreHanja";
    Key[Key["Key_Hangul_PostHanja"] = 16781627] = "Key_Hangul_PostHanja";
    Key[Key["Key_Hangul_Special"] = 16781631] = "Key_Hangul_Special";
    Key[Key["Key_Dead_Grave"] = 16781904] = "Key_Dead_Grave";
    Key[Key["Key_Dead_Acute"] = 16781905] = "Key_Dead_Acute";
    Key[Key["Key_Dead_Circumflex"] = 16781906] = "Key_Dead_Circumflex";
    Key[Key["Key_Dead_Tilde"] = 16781907] = "Key_Dead_Tilde";
    Key[Key["Key_Dead_Macron"] = 16781908] = "Key_Dead_Macron";
    Key[Key["Key_Dead_Breve"] = 16781909] = "Key_Dead_Breve";
    Key[Key["Key_Dead_Abovedot"] = 16781910] = "Key_Dead_Abovedot";
    Key[Key["Key_Dead_Diaeresis"] = 16781911] = "Key_Dead_Diaeresis";
    Key[Key["Key_Dead_Abovering"] = 16781912] = "Key_Dead_Abovering";
    Key[Key["Key_Dead_Doubleacute"] = 16781913] = "Key_Dead_Doubleacute";
    Key[Key["Key_Dead_Caron"] = 16781914] = "Key_Dead_Caron";
    Key[Key["Key_Dead_Cedilla"] = 16781915] = "Key_Dead_Cedilla";
    Key[Key["Key_Dead_Ogonek"] = 16781916] = "Key_Dead_Ogonek";
    Key[Key["Key_Dead_Iota"] = 16781917] = "Key_Dead_Iota";
    Key[Key["Key_Dead_Voiced_Sound"] = 16781918] = "Key_Dead_Voiced_Sound";
    Key[Key["Key_Dead_Semivoiced_Sound"] = 16781919] = "Key_Dead_Semivoiced_Sound";
    Key[Key["Key_Dead_Belowdot"] = 16781920] = "Key_Dead_Belowdot";
    Key[Key["Key_Dead_Hook"] = 16781921] = "Key_Dead_Hook";
    Key[Key["Key_Dead_Horn"] = 16781922] = "Key_Dead_Horn";
    Key[Key["Key_Dead_Stroke"] = 16781923] = "Key_Dead_Stroke";
    Key[Key["Key_Dead_Abovecomma"] = 16781924] = "Key_Dead_Abovecomma";
    Key[Key["Key_Dead_Abovereversedcomma"] = 16781925] = "Key_Dead_Abovereversedcomma";
    Key[Key["Key_Dead_Doublegrave"] = 16781926] = "Key_Dead_Doublegrave";
    Key[Key["Key_Dead_Belowring"] = 16781927] = "Key_Dead_Belowring";
    Key[Key["Key_Dead_Belowmacron"] = 16781928] = "Key_Dead_Belowmacron";
    Key[Key["Key_Dead_Belowcircumflex"] = 16781929] = "Key_Dead_Belowcircumflex";
    Key[Key["Key_Dead_Belowtilde"] = 16781930] = "Key_Dead_Belowtilde";
    Key[Key["Key_Dead_Belowbreve"] = 16781931] = "Key_Dead_Belowbreve";
    Key[Key["Key_Dead_Belowdiaeresis"] = 16781932] = "Key_Dead_Belowdiaeresis";
    Key[Key["Key_Dead_Invertedbreve"] = 16781933] = "Key_Dead_Invertedbreve";
    Key[Key["Key_Dead_Belowcomma"] = 16781934] = "Key_Dead_Belowcomma";
    Key[Key["Key_Dead_Currency"] = 16781935] = "Key_Dead_Currency";
    Key[Key["Key_Dead_a"] = 16781952] = "Key_Dead_a";
    Key[Key["Key_Dead_A"] = 16781953] = "Key_Dead_A";
    Key[Key["Key_Dead_e"] = 16781954] = "Key_Dead_e";
    Key[Key["Key_Dead_E"] = 16781955] = "Key_Dead_E";
    Key[Key["Key_Dead_i"] = 16781956] = "Key_Dead_i";
    Key[Key["Key_Dead_I"] = 16781957] = "Key_Dead_I";
    Key[Key["Key_Dead_o"] = 16781958] = "Key_Dead_o";
    Key[Key["Key_Dead_O"] = 16781959] = "Key_Dead_O";
    Key[Key["Key_Dead_u"] = 16781960] = "Key_Dead_u";
    Key[Key["Key_Dead_U"] = 16781961] = "Key_Dead_U";
    Key[Key["Key_Dead_Small_Schwa"] = 16781962] = "Key_Dead_Small_Schwa";
    Key[Key["Key_Dead_Capital_Schwa"] = 16781963] = "Key_Dead_Capital_Schwa";
    Key[Key["Key_Dead_Greek"] = 16781964] = "Key_Dead_Greek";
    Key[Key["Key_Dead_Lowline"] = 16781968] = "Key_Dead_Lowline";
    Key[Key["Key_Dead_Aboveverticalline"] = 16781969] = "Key_Dead_Aboveverticalline";
    Key[Key["Key_Dead_Belowverticalline"] = 16781970] = "Key_Dead_Belowverticalline";
    Key[Key["Key_Dead_Longsolidusoverlay"] = 16781971] = "Key_Dead_Longsolidusoverlay";
    Key[Key["Key_Back"] = 16777313] = "Key_Back";
    Key[Key["Key_Forward"] = 16777314] = "Key_Forward";
    Key[Key["Key_Stop"] = 16777315] = "Key_Stop";
    Key[Key["Key_Refresh"] = 16777316] = "Key_Refresh";
    Key[Key["Key_VolumeDown"] = 16777328] = "Key_VolumeDown";
    Key[Key["Key_VolumeMute"] = 16777329] = "Key_VolumeMute";
    Key[Key["Key_VolumeUp"] = 16777330] = "Key_VolumeUp";
    Key[Key["Key_BassBoost"] = 16777331] = "Key_BassBoost";
    Key[Key["Key_BassUp"] = 16777332] = "Key_BassUp";
    Key[Key["Key_BassDown"] = 16777333] = "Key_BassDown";
    Key[Key["Key_TrebleUp"] = 16777334] = "Key_TrebleUp";
    Key[Key["Key_TrebleDown"] = 16777335] = "Key_TrebleDown";
    Key[Key["Key_MediaPlay"] = 16777344] = "Key_MediaPlay";
    Key[Key["Key_MediaStop"] = 16777345] = "Key_MediaStop";
    Key[Key["Key_MediaPrevious"] = 16777346] = "Key_MediaPrevious";
    Key[Key["Key_MediaNext"] = 16777347] = "Key_MediaNext";
    Key[Key["Key_MediaRecord"] = 16777348] = "Key_MediaRecord";
    Key[Key["Key_MediaPause"] = 16777349] = "Key_MediaPause";
    Key[Key["Key_MediaTogglePlayPause"] = 16777350] = "Key_MediaTogglePlayPause";
    Key[Key["Key_HomePage"] = 16777360] = "Key_HomePage";
    Key[Key["Key_Favorites"] = 16777361] = "Key_Favorites";
    Key[Key["Key_Search"] = 16777362] = "Key_Search";
    Key[Key["Key_Standby"] = 16777363] = "Key_Standby";
    Key[Key["Key_OpenUrl"] = 16777364] = "Key_OpenUrl";
    Key[Key["Key_LaunchMail"] = 16777376] = "Key_LaunchMail";
    Key[Key["Key_LaunchMedia"] = 16777377] = "Key_LaunchMedia";
    Key[Key["Key_Launch0"] = 16777378] = "Key_Launch0";
    Key[Key["Key_Launch1"] = 16777379] = "Key_Launch1";
    Key[Key["Key_Launch2"] = 16777380] = "Key_Launch2";
    Key[Key["Key_Launch3"] = 16777381] = "Key_Launch3";
    Key[Key["Key_Launch4"] = 16777382] = "Key_Launch4";
    Key[Key["Key_Launch5"] = 16777383] = "Key_Launch5";
    Key[Key["Key_Launch6"] = 16777384] = "Key_Launch6";
    Key[Key["Key_Launch7"] = 16777385] = "Key_Launch7";
    Key[Key["Key_Launch8"] = 16777386] = "Key_Launch8";
    Key[Key["Key_Launch9"] = 16777387] = "Key_Launch9";
    Key[Key["Key_LaunchA"] = 16777388] = "Key_LaunchA";
    Key[Key["Key_LaunchB"] = 16777389] = "Key_LaunchB";
    Key[Key["Key_LaunchC"] = 16777390] = "Key_LaunchC";
    Key[Key["Key_LaunchD"] = 16777391] = "Key_LaunchD";
    Key[Key["Key_LaunchE"] = 16777392] = "Key_LaunchE";
    Key[Key["Key_LaunchF"] = 16777393] = "Key_LaunchF";
    Key[Key["Key_LaunchG"] = 16777486] = "Key_LaunchG";
    Key[Key["Key_LaunchH"] = 16777487] = "Key_LaunchH";
    Key[Key["Key_MonBrightnessUp"] = 16777394] = "Key_MonBrightnessUp";
    Key[Key["Key_MonBrightnessDown"] = 16777395] = "Key_MonBrightnessDown";
    Key[Key["Key_KeyboardLightOnOff"] = 16777396] = "Key_KeyboardLightOnOff";
    Key[Key["Key_KeyboardBrightnessUp"] = 16777397] = "Key_KeyboardBrightnessUp";
    Key[Key["Key_KeyboardBrightnessDown"] = 16777398] = "Key_KeyboardBrightnessDown";
    Key[Key["Key_PowerOff"] = 16777399] = "Key_PowerOff";
    Key[Key["Key_WakeUp"] = 16777400] = "Key_WakeUp";
    Key[Key["Key_Eject"] = 16777401] = "Key_Eject";
    Key[Key["Key_ScreenSaver"] = 16777402] = "Key_ScreenSaver";
    Key[Key["Key_WWW"] = 16777403] = "Key_WWW";
    Key[Key["Key_Memo"] = 16777404] = "Key_Memo";
    Key[Key["Key_LightBulb"] = 16777405] = "Key_LightBulb";
    Key[Key["Key_Shop"] = 16777406] = "Key_Shop";
    Key[Key["Key_History"] = 16777407] = "Key_History";
    Key[Key["Key_AddFavorite"] = 16777408] = "Key_AddFavorite";
    Key[Key["Key_HotLinks"] = 16777409] = "Key_HotLinks";
    Key[Key["Key_BrightnessAdjust"] = 16777410] = "Key_BrightnessAdjust";
    Key[Key["Key_Finance"] = 16777411] = "Key_Finance";
    Key[Key["Key_Community"] = 16777412] = "Key_Community";
    Key[Key["Key_AudioRewind"] = 16777413] = "Key_AudioRewind";
    Key[Key["Key_BackForward"] = 16777414] = "Key_BackForward";
    Key[Key["Key_ApplicationLeft"] = 16777415] = "Key_ApplicationLeft";
    Key[Key["Key_ApplicationRight"] = 16777416] = "Key_ApplicationRight";
    Key[Key["Key_Book"] = 16777417] = "Key_Book";
    Key[Key["Key_CD"] = 16777418] = "Key_CD";
    Key[Key["Key_Calculator"] = 16777419] = "Key_Calculator";
    Key[Key["Key_ToDoList"] = 16777420] = "Key_ToDoList";
    Key[Key["Key_ClearGrab"] = 16777421] = "Key_ClearGrab";
    Key[Key["Key_Close"] = 16777422] = "Key_Close";
    Key[Key["Key_Copy"] = 16777423] = "Key_Copy";
    Key[Key["Key_Cut"] = 16777424] = "Key_Cut";
    Key[Key["Key_Display"] = 16777425] = "Key_Display";
    Key[Key["Key_DOS"] = 16777426] = "Key_DOS";
    Key[Key["Key_Documents"] = 16777427] = "Key_Documents";
    Key[Key["Key_Excel"] = 16777428] = "Key_Excel";
    Key[Key["Key_Explorer"] = 16777429] = "Key_Explorer";
    Key[Key["Key_Game"] = 16777430] = "Key_Game";
    Key[Key["Key_Go"] = 16777431] = "Key_Go";
    Key[Key["Key_iTouch"] = 16777432] = "Key_iTouch";
    Key[Key["Key_LogOff"] = 16777433] = "Key_LogOff";
    Key[Key["Key_Market"] = 16777434] = "Key_Market";
    Key[Key["Key_Meeting"] = 16777435] = "Key_Meeting";
    Key[Key["Key_MenuKB"] = 16777436] = "Key_MenuKB";
    Key[Key["Key_MenuPB"] = 16777437] = "Key_MenuPB";
    Key[Key["Key_MySites"] = 16777438] = "Key_MySites";
    Key[Key["Key_News"] = 16777439] = "Key_News";
    Key[Key["Key_OfficeHome"] = 16777440] = "Key_OfficeHome";
    Key[Key["Key_Option"] = 16777441] = "Key_Option";
    Key[Key["Key_Paste"] = 16777442] = "Key_Paste";
    Key[Key["Key_Phone"] = 16777443] = "Key_Phone";
    Key[Key["Key_Calendar"] = 16777444] = "Key_Calendar";
    Key[Key["Key_Reply"] = 16777445] = "Key_Reply";
    Key[Key["Key_Reload"] = 16777446] = "Key_Reload";
    Key[Key["Key_RotateWindows"] = 16777447] = "Key_RotateWindows";
    Key[Key["Key_RotationPB"] = 16777448] = "Key_RotationPB";
    Key[Key["Key_RotationKB"] = 16777449] = "Key_RotationKB";
    Key[Key["Key_Save"] = 16777450] = "Key_Save";
    Key[Key["Key_Send"] = 16777451] = "Key_Send";
    Key[Key["Key_Spell"] = 16777452] = "Key_Spell";
    Key[Key["Key_SplitScreen"] = 16777453] = "Key_SplitScreen";
    Key[Key["Key_Support"] = 16777454] = "Key_Support";
    Key[Key["Key_TaskPane"] = 16777455] = "Key_TaskPane";
    Key[Key["Key_Terminal"] = 16777456] = "Key_Terminal";
    Key[Key["Key_Tools"] = 16777457] = "Key_Tools";
    Key[Key["Key_Travel"] = 16777458] = "Key_Travel";
    Key[Key["Key_Video"] = 16777459] = "Key_Video";
    Key[Key["Key_Word"] = 16777460] = "Key_Word";
    Key[Key["Key_Xfer"] = 16777461] = "Key_Xfer";
    Key[Key["Key_ZoomIn"] = 16777462] = "Key_ZoomIn";
    Key[Key["Key_ZoomOut"] = 16777463] = "Key_ZoomOut";
    Key[Key["Key_Away"] = 16777464] = "Key_Away";
    Key[Key["Key_Messenger"] = 16777465] = "Key_Messenger";
    Key[Key["Key_WebCam"] = 16777466] = "Key_WebCam";
    Key[Key["Key_MailForward"] = 16777467] = "Key_MailForward";
    Key[Key["Key_Pictures"] = 16777468] = "Key_Pictures";
    Key[Key["Key_Music"] = 16777469] = "Key_Music";
    Key[Key["Key_Battery"] = 16777470] = "Key_Battery";
    Key[Key["Key_Bluetooth"] = 16777471] = "Key_Bluetooth";
    Key[Key["Key_WLAN"] = 16777472] = "Key_WLAN";
    Key[Key["Key_UWB"] = 16777473] = "Key_UWB";
    Key[Key["Key_AudioForward"] = 16777474] = "Key_AudioForward";
    Key[Key["Key_AudioRepeat"] = 16777475] = "Key_AudioRepeat";
    Key[Key["Key_AudioRandomPlay"] = 16777476] = "Key_AudioRandomPlay";
    Key[Key["Key_Subtitle"] = 16777477] = "Key_Subtitle";
    Key[Key["Key_AudioCycleTrack"] = 16777478] = "Key_AudioCycleTrack";
    Key[Key["Key_Time"] = 16777479] = "Key_Time";
    Key[Key["Key_Hibernate"] = 16777480] = "Key_Hibernate";
    Key[Key["Key_View"] = 16777481] = "Key_View";
    Key[Key["Key_TopMenu"] = 16777482] = "Key_TopMenu";
    Key[Key["Key_PowerDown"] = 16777483] = "Key_PowerDown";
    Key[Key["Key_Suspend"] = 16777484] = "Key_Suspend";
    Key[Key["Key_ContrastAdjust"] = 16777485] = "Key_ContrastAdjust";
    Key[Key["Key_TouchpadToggle"] = 16777488] = "Key_TouchpadToggle";
    Key[Key["Key_TouchpadOn"] = 16777489] = "Key_TouchpadOn";
    Key[Key["Key_TouchpadOff"] = 16777490] = "Key_TouchpadOff";
    Key[Key["Key_MicMute"] = 16777491] = "Key_MicMute";
    Key[Key["Key_Red"] = 16777492] = "Key_Red";
    Key[Key["Key_Green"] = 16777493] = "Key_Green";
    Key[Key["Key_Yellow"] = 16777494] = "Key_Yellow";
    Key[Key["Key_Blue"] = 16777495] = "Key_Blue";
    Key[Key["Key_ChannelUp"] = 16777496] = "Key_ChannelUp";
    Key[Key["Key_ChannelDown"] = 16777497] = "Key_ChannelDown";
    Key[Key["Key_Guide"] = 16777498] = "Key_Guide";
    Key[Key["Key_Info"] = 16777499] = "Key_Info";
    Key[Key["Key_Settings"] = 16777500] = "Key_Settings";
    Key[Key["Key_MicVolumeUp"] = 16777501] = "Key_MicVolumeUp";
    Key[Key["Key_MicVolumeDown"] = 16777502] = "Key_MicVolumeDown";
    Key[Key["Key_New"] = 16777504] = "Key_New";
    Key[Key["Key_Open"] = 16777505] = "Key_Open";
    Key[Key["Key_Find"] = 16777506] = "Key_Find";
    Key[Key["Key_Undo"] = 16777507] = "Key_Undo";
    Key[Key["Key_Redo"] = 16777508] = "Key_Redo";
    Key[Key["Key_MediaLast"] = 16842751] = "Key_MediaLast";
    Key[Key["Key_unknown"] = 33554431] = "Key_unknown";
    Key[Key["Key_Call"] = 17825796] = "Key_Call";
    Key[Key["Key_Camera"] = 17825824] = "Key_Camera";
    Key[Key["Key_CameraFocus"] = 17825825] = "Key_CameraFocus";
    Key[Key["Key_Context1"] = 17825792] = "Key_Context1";
    Key[Key["Key_Context2"] = 17825793] = "Key_Context2";
    Key[Key["Key_Context3"] = 17825794] = "Key_Context3";
    Key[Key["Key_Context4"] = 17825795] = "Key_Context4";
    Key[Key["Key_Flip"] = 17825798] = "Key_Flip";
    Key[Key["Key_Hangup"] = 17825797] = "Key_Hangup";
    Key[Key["Key_No"] = 16842754] = "Key_No";
    Key[Key["Key_Select"] = 16842752] = "Key_Select";
    Key[Key["Key_Yes"] = 16842753] = "Key_Yes";
    Key[Key["Key_ToggleCallHangup"] = 17825799] = "Key_ToggleCallHangup";
    Key[Key["Key_VoiceDial"] = 17825800] = "Key_VoiceDial";
    Key[Key["Key_LastNumberRedial"] = 17825801] = "Key_LastNumberRedial";
    Key[Key["Key_Execute"] = 16908291] = "Key_Execute";
    Key[Key["Key_Printer"] = 16908290] = "Key_Printer";
    Key[Key["Key_Play"] = 16908293] = "Key_Play";
    Key[Key["Key_Sleep"] = 16908292] = "Key_Sleep";
    Key[Key["Key_Zoom"] = 16908294] = "Key_Zoom";
    Key[Key["Key_Exit"] = 16908298] = "Key_Exit";
    Key[Key["Key_Cancel"] = 16908289] = "Key_Cancel";
})(Key = exports.Key || (exports.Key = {}));
