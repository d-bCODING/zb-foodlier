package com.zerobase.foodlier.module.recipe.dto.recipe;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeListDto {
    private String title;
    private String mainImageUrl;
    private String content;
    private int heartCount;
    private boolean isHeart;
}
