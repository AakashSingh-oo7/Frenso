package com.Aakash.frenso.controller;


import com.Aakash.frenso.dto.PostDto;
import com.Aakash.frenso.service.PostService;
import com.Aakash.frenso.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
public class PostController {


    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    public ResponseEntity<PostDto>
}
