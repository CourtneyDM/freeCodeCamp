function titleCase( str ) {
    str = str.split( " " );
    var newArray = [];
    var upperCaseLetter;

    for ( var i = 0; i < str.length; i++ ) {
        for ( var j = 0; j < str[ i ].length; j++ ) {
            if ( j === 0 ) {
                upperCaseLetter = str[ i ][ j ].toUpperCase();
            }
            else
                upperCaseLetter += str[ i ][ j ].toLowerCase();
        }
        newArray.push( upperCaseLetter );
    }
    return newArray.join( ' ' );
}

titleCase( "sHoRt AnD sToUt" );