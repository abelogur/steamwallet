package ru.steamwallet.swcommon.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Sergey Ignatov on 04/08/16.
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AlreadyRegistered extends RuntimeException {
    public AlreadyRegistered(String message) { super(message); }
    public static final long serialVersionUID = 0;
}