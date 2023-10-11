package com.zerobase.foodlier.module.recipe.service.quotation;

import com.zerobase.foodlier.common.response.ListResponse;
import com.zerobase.foodlier.module.recipe.domain.model.Recipe;
import com.zerobase.foodlier.module.recipe.dto.quotation.QuotationDetailResponse;
import com.zerobase.foodlier.module.recipe.dto.quotation.QuotationDtoRequest;
import com.zerobase.foodlier.module.recipe.dto.quotation.QuotationTopResponse;
import com.zerobase.foodlier.module.recipe.dto.recipe.RecipeDtoRequest;
import org.springframework.data.domain.Pageable;

public interface QuotationService {
    void createQuotation(Long memberId, QuotationDtoRequest request);
    ListResponse<QuotationTopResponse> getQuotationListForRefrigerator(Long memberId, Pageable pageable);
    ListResponse<QuotationTopResponse> getQuotationListForRecipe(Long memberId, Pageable pageable);
    QuotationDetailResponse getQuotationDetail(Long memberId, Long quotationId);
    void convertToRecipe(Long memberId, Long quotationId, RecipeDtoRequest request);
    void updateQuotation(Long memberId, Long quotationId, QuotationDtoRequest request);
    void deleteQuotation(Long memberId, Long quotationId);
    Recipe getQuotationForSend(Long memberId, Long quotationId);

}
