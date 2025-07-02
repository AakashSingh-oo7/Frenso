package com.Aakash.frenso.service;

import com.Aakash.frenso.exception.PostException;
import com.Aakash.frenso.model.Post;
import com.Aakash.frenso.model.User;
import com.Aakash.frenso.request.PostReplyReques;
import jdk.jshell.spi.ExecutionControl;

import java.util.List;

public interface PostService {
    public Post createPost(Post req, User user) throws ExecutionControl.UserException ;
    public List<Post> findAllPost();
    public Post rePost(Long postId, User user) throws ExecutionControl.UserException, PostException;
    public Post findById(Long postId) throws PostException;
    public void deletePostById(Long postId, User user) throws PostException, ExecutionControl.UserException;
    public Post removeFromRePost(Long postId, User user) throws PostException, ExecutionControl.UserException;
    public Post createdReply(PostReplyReques req, User user) throws PostException;

    public List<Post> getUserPost(User user);
    public  List<Post> findByLikesContainsUser(User user);




}
