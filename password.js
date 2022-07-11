var password = (A3b4qoLm2)
function SimplePasswordChecker(password) {
    let charCheck = password.length > 7 && password.length < 31;
    let capitalCheck = /[A-Z]/g.test(password);
    let numberCheck = /[0-9]/g.test(password);
    let passwordCheck = !/password/gi.test(password);
    let punctuationCheck = /[.?!:,;]/g.test(password);
    return {charCheck, punctuationCheck, capitalCheck, numberCheck, passwordCheck};
}

                                                                                                                                   
                                                                                                                                   
,----..    ,---,                              ,-.                                          .--.--.               ,--,            
/   /   \ ,--.' |                          ,--/ /|                 ,---,                   /  /    '.           ,--.'|     .--.,  
|   :     :|  |  :                        ,--. :/ |                /_ ./|   ,---.          |  :  /`. /           |  | :   ,--.'  \ 
.   |  ;. /:  :  :                        :  : ' /           ,---, |  ' :  '   ,'\         ;  |  |--`            :  : '   |  | /\/ 
.   ; /--` :  |  |,--.   ,---.     ,---.  |  '  /           /___/ \.  : | /   /   |        |  :  ;_       ,---.  |  ' |   :  : :   
;   | ;    |  :  '   |  /     \   /     \ '  |  :            .  \  \ ,' '.   ; ,. :         \  \    `.   /     \ '  | |   :  | |-, 
|   : |    |  |   /' : /    /  | /    / ' |  |   \            \  ;  `  ,''   | |: :          `----.   \ /    /  ||  | :   |  : :/| 
.   | '___ '  :  | | |.    ' / |.    ' /  '  : |. \            \  \    ' '   | .; :          __ \  \  |.    ' / |'  : |__ |  |  .' 
'   ; : .'||  |  ' | :'   ;   /|'   ; :__ |  | ' \ \            '  \   | |   :    |         /  /`--'  /'   ;   /||  | '.'|'  : '   
'   | '/  :|  :  :_:,''   |  / |'   | '.'|'  : |--'              \  ;  ;  \   \  /         '--'.     / '   |  / |;  :    ;|  | |   
|   :    / |  | ,'    |   :    ||   :    :;  |,'                  :  \  \  `----'            `--'---'  |   :    ||  ,   / |  : \   
\   \ .'  `--''       \   \  /  \   \  / '--'                     \  ' ;                               \   \  /  ---`-'  |  |,'   
 `---`                 `----'    `----'                            `--`                                 `----'           `--'     
                                                                                                                                  
